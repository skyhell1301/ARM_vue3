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
        <custom-tr v-for="command in activeCyclogramm.cyclodata" :key="command">
          <td>{{ command.NumInCicl }}</td>
          <td>{{ command.unit_type }}</td>
          <td>{{ command.command_txt + ' (' +  command.CommandNum + ')'}}</td>
          <td>{{ command.UnitNum }}</td>
          <td>{{ command.Params }}</td>
          <td>{{ }}</td>
          <td>{{ command.TimeOut }}</td>
          <td>{{ }}</td>
        </custom-tr>
      </table>
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
      activeCommand: null
    }
  },
  methods: {
    async getCyclogrammsList() {
      this.$store.dispatch('protocol/addLogMessage', {text: 'Отправлен запрос на получение списка циклограмм'})
      this.$store.dispatch('cyclogramms/changeCyclogrammsListStatus', false)
      let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi', 'POST', null, null, JSON.stringify({cyclogram: {dialog: "open"}}))
      if (res.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Запрос на получение списка циклограмм сервером принят'})
      }
    },
    async stopGettingCyclogrammsList() {
      let res = await this.sendRESTCommand('http://smotr/site/cyclogramapi', 'POST', null, null, JSON.stringify({cyclogram: {dialog: "close"}}))
      if (res.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Получение списка циклограмм от сервера остановлено'})
      }
    },
    updateActiveCyclogramm (data) {
      this.activeCyclogramm = this.activeCyclogramm === data ? null : data
    }
  },
  watch: {
    cyclogrammsListStatus() {
      if (this.cyclogrammsListStatus) {
        this.stopGettingCyclogrammsList()
      }
    },
  },
  mixins: [REST],
  computed: {
    cyclogrammsList() {
      console.log(this.$store.state.cyclogramms.cyclogrammsList)
      return this.$store.state.cyclogramms.cyclogrammsList
    },
    cyclogrammsListStatus() {
      return this.$store.state.cyclogramms.cyclogrammsListStatus
    }
  },
  mounted() {
    if (!this.cyclogrammsStatus) {
      // this.getCyclogrammsList()
    }
  }
}
</script>

<style scoped>
.cylogramms-dialog__wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.cylogramms-dialog__container {
  width: 80%;
  margin: 10px 10% 0 10%;

}

.tables__container {
  width: 100%;
}

.cylogramms-dialog__container table {
  user-select: none;
  width: 100%;
  border: 1px solid gray;
  margin-bottom: 20px;
}
.cylogramm:hover {
  cursor: pointer;
  background: var(--contrasr-color);
}
.activeCyclogramm {
  background: green;
}

.cylogramms-dialog__container th {
  border: 1px solid gray;
}

.cylogramms-dialog__container td {
  border: 1px solid gray;
  text-align: center;
}



</style>