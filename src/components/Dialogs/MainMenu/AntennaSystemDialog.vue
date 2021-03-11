<template>
  <div class="antenna-device-container">
    <DisplayParametersComponent :device-data="antennaParameters"/>
    <div class="container-control-elements">
      <select class="control-elements" v-model="selectedMode">
        <option v-for="mode in workModeList" :key="mode" :value="mode">
          {{ $t('DevicesParameters.AntennaSystem.values.' + mode) }}
        </option>
      </select>
      <custom-button class="control-elements" @buttonClick="sendMode">Установить режим</custom-button>
    </div>
  </div>
</template>

<script>
import DisplayParametersComponent
  from "@/components/DevicesPanel/ParametersDisplays/DisplayParametersComponent";
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import RESTRequest from "@/mixins/REST";

export default {
  name: 'AntennaSystemDialog',
  data() {
    return {
      selectedMode: null,
      workModeList: ['Auto', 'Programm']
    }
  },
  mixins: [RESTRequest],
  components: {
    CustomButton,
    DisplayParametersComponent,
  },
  methods: {
    async sendMode() {
      if (this.antennaParameters?.workmode?.value_list && this.selectedMode) {
        let obj = {id: this.antennaParameters.id.valueParameter}
        obj.workmode = this.antennaParameters.workmode.value_list.indexOf(this.selectedMode)
        let response = await this.sendRESTCommand('http://yii-site/nomenklatura/smotrantennaupdate/' + obj.id, 'POST', null, 'qqq', JSON.stringify(obj))
        if (response.ok) {
          this.$store.dispatch('protocol/addLogMessage', {text: 'Режим "' + this.$t('DevicesParameters.AntennaSystem.values.' + this.selectedMode ) + '" установлен'})
        } else {
          this.$store.dispatch('protocol/addLogMessage', {text: 'Не удалось установить режим "' + this.$t('DevicesParameters.AntennaSystem.values.' + this.selectedMode ) + '". Сервер не отвечает.'})
        }
      }

    }

  },
  watch: {
    antennaParameters () {
      this.workModeList = this.antennaParameters.workmode.value_list
    }
  },
  computed: {
    antennaParameters() {
      return this.$store.getters['devicesParameters/antennaParameters']?.deviceParameters
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.antenna-device-container {
  display: grid;
  grid-template-rows: 70% 30%;
  width: 100%;
  height: 100%;
  font-size: 7vmin;
}

.container-control-elements {
  align-self: center;
  justify-self: center;
  display: flex;
}

.control-elements {
  font-size: .5em;
}

.text-parameters {
  width: 100%;
  height: 100%;
}


</style>
