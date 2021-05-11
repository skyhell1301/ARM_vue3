<template>
  <div class="cylogramms-dialog__wrapper">
    <div class="cylogramms-dialog__container">
      <div v-if="!cyclogrammsListStatus">Циклограмм нет
        <custom-button @buttonClick="getCyclogrammsList">Получить список циклограмм</custom-button>
      </div>
      <div v-else class="tables__container">
        <CyclogrammsTable :cyclogramms-list="cyclogrammsList" @updateActiveCyclo="updateActiveCyclo"/>
      </div>
      <div class="tables__container">
        <CommandsCycloTable v-if="activeCyclogramm !== null"
                            :active-cyclogramm="activeCyclogramm"
                            @updateActiveCommand="updateActiveCommand"
                            ref="commandCycloTable"
        />
      </div>
    </div>
    <div class="control-cyclogramms__container">
      <div class="control-cyclogramms__title">Управление циклограммой</div>
      <custom-button class="control-cyclogramms__button"
                     @buttonClick="startCyclogramm"
                     v-if="activeCyclogramm"
      >
        Выполнить циклограмму
      </custom-button>
      <custom-button class="control-cyclogramms__button"
                     @buttonClick="addNewCommand"
                     v-if="activeCyclogramm"
      >
        Добавить новую команду
      </custom-button>
      <div class="control-cyclogramms__commands-container"
           v-if="activeCommand"
      >
        <div class="control-cyclogramms__title">Управление командой</div>
        <custom-button class="control-cyclogramms__button"
                       @buttonClick="startCommand"
        >
          Выполнить одиночную команду
        </custom-button>

        <custom-button class="control-cyclogramms__button"
                       @buttonClick="clearStatuses">Очистить статусы
        </custom-button>
        <div>Устройство:</div>
        <CustomSelect ref="deviceSelect" @onChange="setSelectDevice($event.target.value)" class="control-cyclogramms__select">
          <option v-for="device in devicesList" :key="device.NameEq"
                  :selected="checkSelect(device.NameEq)"
                  :value="device.NameEq"
          >
            {{ device.NameEq }}
          </option>
        </CustomSelect>
        <div v-if="selectDevice">Команда:</div>
        <select class="control-cyclogramms__select">
          <option v-for="command in selectDevice?.comlist" :key="command.NUMCMD">
            {{ command.NAMECMD }}
          </option>
        </select>
        <div>Параметры:</div>
        <input class="control-cyclogramms__button" :value="activeCommand.Params">
      </div>
    </div>
  </div>
</template>

<script>
import REST from "@/mixins/REST";
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import CyclogrammsTable from "@/components/Dialogs/MainMenu/CyclorgammsDialog/CyclogrammsTable";

import CommandsCycloTable from "@/components/Dialogs/MainMenu/CyclorgammsDialog/CommandsCycloTable";
import CustomSelect from "@/components/CustomSimpleComponents/CustomSelect";

export default {
  name: 'CyclogrammsDialog',
  components: {CustomSelect, CommandsCycloTable, CyclogrammsTable, CustomButton},
  data() {
    return {
      activeCyclogramm: null,
      activeCommand: null,
      selectDevice: null,
      selectStatus: true
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
    updateActiveCyclo(cyclo) {
      this.activeCyclogramm = cyclo
      if (this.activeCommand) this.$refs.commandCycloTable.updateActiveCommand(this.activeCommand)
    },
    updateActiveCommand(command) {
      if(command !== this.activeCommand) this.selectStatus = true
      this.activeCommand = this.activeCommand === command ? null : command
      if(!this.activeCommand) {
        this.selectDevice = null
        this.selectStatus = true
      }
    },
    checkSelect(device) {
      if(this.selectStatus) {
        const isSelect = this.activeCommand.unit_type === device
        if (isSelect) {
          this.selectStatus = false
          this.setSelectDevice(device)
          console.log(isSelect)
          return isSelect
        }
        return false
      } else {
        return false
      }
    },
    clearStatuses() {
      this.$store.dispatch('cyclogramms/clearStatuses')
    },
    setSelectDevice(deviceName) {
      for(let dev in this.devicesList) {
        if(this.devicesList[dev].NameEq === deviceName) {
          this.selectDevice = this.devicesList[dev]
          console.log(this.selectDevice)
        }
      }
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
        if (res.ok) {
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
        if (res.ok) {
          this.$store.dispatch('protocol/addLogMessage', {text: `Выполняется циклограмма ${this.activeCyclogramm.name}`})
        }
      }
    },
    async addNewCommand() {
      let reqBody = {
        command: {
          command: null,
          cyclogram_name: this.activeCyclogramm.name,
          cyclogram_id: this.activeCyclogramm.id,
          executionType: 'addCommand',
          clientid: this.$store.state.app_id
        }
      }
      let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi',
          'POST', null, null, JSON.stringify(reqBody))
      if (res.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: `Добавлена новая команда`})
      }
    }
  },
  mixins: [REST],
  computed: {
    cyclogrammsList() {
      return this.$store.state.cyclogramms.cyclogrammsList
    },
    devicesList() {
      return this.$store.state.cyclogramms.devicesList
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
    if (!this.cyclogrammsListStatus) {
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
  align-items: center;
}

.control-cyclogramms__commands-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.control-cyclogramms__button {
  margin: 10px 0;
  align-self: center;
  width: 80%;
}

.control-cyclogramms__title {
  margin-top: 20px;
}

.control-cyclogramms__select {
  width: 80%;
}
</style>