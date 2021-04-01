<template>
  <div class="cylogramms-dialog__wrapper">
    <div class="cylogramms-dialog__container">
      <div v-if="!cyclogrammsListStatus">Циклограмм нет
        <custom-button @buttonClick="getCyclogrammsList">Получить список циклограмм</custom-button>
      </div>
      <div v-else class="tables__container">
        <table class="cyclogramms_table">
          <tr>
            <th>№</th>
            <th>{{ $t('Interface.cyclogramm_name') }}</th>
            <th>{{ $t('Interface.created_date') }}</th>
            <th>{{ $t('Interface.description') }}</th>
          </tr>
          <custom-tr class="cylogramm"
                     v-for="cyclogramm in cyclogrammsList"
                     :key="cyclogramm.id"
                     @trClick="updateActiveCyclogramm(cyclogramm)"
                     :class="{'activeCyclogramm': cyclogramm === activeCyclogramm}"
          >
            <td>{{ cyclogramm.id }}</td>
            <td>{{ cyclogramm.name }}</td>
            <td>{{ cyclogramm.created }}</td>
            <td>{{ cyclogramm.descr }}</td>
          </custom-tr>
        </table>
      </div>
      <table class="cyclogramms_table" v-if="activeCyclogramm !== null">
        <tr>
          <th>№</th>
          <th>{{ $t('Interface.device_name') }}</th>
          <th>{{ $t('Interface.command_name') }}</th>
          <th>{{ $t('Interface.device_number') }}</th>
          <th>{{ $t('Interface.set_value') }}</th>
          <th>{{ $t('Interface.address') }}</th>
          <th>{{ $t('Interface.timeout') }}</th>
          <th>{{ $t('Interface.status') }}</th>
        </tr>
        <custom-tr v-for="command in activeCyclogramm.cyclodata"
                   :key="command"
                   @trClick="updateActiveCommand(command)"
                   class="cylogramm"
                   :class="{'activeCyclogramm': command === activeCommand}"
        >
          <td>{{ command.NumInCicl }}</td>
          <td>{{ command.unit_type }}</td>
          <td>{{ command.command_txt + ' (' + command.CommandNum + ')' }}</td>
          <td>{{ command.UnitNum }}</td>
          <td>{{ command.Params }}</td>
          <td>{{ }}</td>
          <td>{{ command.TimeOut }}</td>
          <td v-if="command.status === 2">{{ '✅' }}</td>
          <td v-else-if="command.status === 1">{{ '🏃💨' }}</td>
          <td v-else>{{ command.status }}</td>
        </custom-tr>
      </table>
    </div>
    <div class="control-cyclogramms__container">
      <custom-button class="control-cyclogramms__button"
                     @buttonClick="startCommand"
      >
        Выполнить одиночную команду
      </custom-button>
      <custom-button class="control-cyclogramms__button"
                     @buttonClick="startCyclogramm">Выполнить циклограмму
      </custom-button>
      <custom-button class="control-cyclogramms__button"
                     @buttonClick="clearStatuses">Очистить статусы
      </custom-button>
      <input class="control-cyclogramms__button" v-model="valueCommand">
    </div>
  </div>
</template>

<script>
import REST from "@/mixins/REST";
import CustomTr from "@/components/CustomSimpleComponents/CustomTr";
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";

export default {
  name: 'CyclogrammsDialog',
  components: {CustomButton, CustomTr},
  data() {
    return {
      activeCyclogramm: null,
      activeCommand: null,
      valueCommand: '2;'
    }
  },
  methods: {
    async getCyclogrammsList() {
      this.$store.dispatch('protocol/addLogMessage', {text: 'Отправлен запрос на получение списка циклограмм'})
      this.$store.dispatch('cyclogramms/changeCyclogrammsListStatus', false)
      let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi', 'POST', null, null,
          JSON.stringify({cyclogram: {dialog: "open", clientid: this.appId}}))
      if (res.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Запрос на получение списка циклограмм сервером принят'})
      }
    },
    async stopGettingCyclogrammsList() {
      let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi', 'POST', null, null,
          JSON.stringify({cyclogram: {dialog: "close", clientid: this.appId}}))
      if (res.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Получение списка циклограмм от сервера остановлено'})
      }
    },
    updateActiveCyclogramm(cyclo) {
      this.activeCyclogramm = this.activeCyclogramm === cyclo ? null : cyclo
    },
    updateActiveCommand(command) {
      this.activeCommand = this.activeCommand === command ? null : command
    },
    clearStatuses() {
      this.$store.dispatch('cyclogramms/clearStatuses')
    },
    async startCyclogramm() {
      if (this.activeCyclogramm) {

        this.clearStatuses()
        let reqBody = {
          command: {
            cyclogram_id: this.activeCyclogramm.id,
            cyclogram_name: this.activeCyclogramm.name,
            executionType: "fullCyclogram",
            clientid: this.$store.state.app_id
          },

        }
        let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi',
            'POST', null, null, JSON.stringify(reqBody))
        if(res.ok) {
          this.$store.dispatch('protocol/addLogMessage', {text: `Выполняется циклограмма ${this.activeCyclogramm.name}`})
        }
      }
    },
    async startCommand() {
      if (this.activeCommand) {
        this.clearStatuses()
        let reqBody = {
          command: {
            cyclogram_id: this.activeCyclogramm.id,
            cyclogram_name: this.activeCyclogramm.name,
            executionType: "singleCommand",
            clientid: this.$store.state.app_id,
            command: this.activeCommand
          },
        }
        reqBody.command.command.Params = this.valueCommand
        let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi',
            'POST', null, null, JSON.stringify(reqBody))
        if(res.ok) {
          this.$store.dispatch('protocol/addLogMessage', {text: `Выполняется циклограмма ${this.activeCyclogramm.name}`})
        }
      }
    }
  },
  mixins: [REST],
  computed: {
    cyclogrammsList() {
      return this.$store.state.cyclogramms.cyclogrammsList
    },
    cyclogrammsListStatus() {
      return this.$store.state.cyclogramms.cyclogrammsListStatus
    },
    cyclogrammExecuteStatus() {
      return this.$store.state.cyclogramms.cyclogrammExecuteStatus
    },
    appId() {
      return this.$store.state.app_id
    }
  },
  mounted() {
    if (!this.cyclogrammsStatus) {
      this.getCyclogrammsList()
    }
  }
}
</script>

<style scoped>
.cylogramms-dialog__wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  background: #f6f1f5;
}

.cylogramms-dialog__container {
  overflow-y: auto;
  width: 100%;
}

.tables__container {
  width: 100%;

}

.cylogramms-dialog__container table {
  user-select: none;
  width: 100%;
  margin-bottom: 20px;
}

.cylogramm:hover {
  cursor: pointer;
  color: var(--main-color);
}

.activeCyclogramm {
  background: var(--good-color);
}

.cylogramms-dialog__container th {
  background: var(--main-color);
  color: #f6f1f5;
}

.cylogramms-dialog__container td {
  box-shadow: 0 0 5px 0.3px rgba(180, 180, 180, 0.8);
  text-align: center;
}


.control-cyclogramms__container {
  width: 20%;
  height: 100%;
  position: fixed;
  left: 80%;
  top: 0;
  box-shadow: 0 0 5px 0.3px rgba(180, 180, 180, 0.8);
  display: flex;
  flex-direction: column;
}

.control-cyclogramms__button {
  margin: 10px 0;
  align-self: center;
  width: 80%;
}
</style>