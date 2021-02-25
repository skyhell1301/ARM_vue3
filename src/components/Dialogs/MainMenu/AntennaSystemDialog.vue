<template>
  <div class="antenna-device-container">
    <display-parameters-component style="font-size: 1em;" :device-data="antennaParameters" device-type="AntennaSystem"/>
    <div class="container-control-elements">
      <select class="control-elements" name="Режим" v-model="selectedMode">
        <option v-for="mode in getWorkModeList" :key="mode">
          {{ mode }}
        </option>
      </select>
      <custom-button class="control-elements" @buttonClick="sendMode">Установить режим</custom-button>
    </div>
  </div>
</template>

<script>
import DisplayParametersComponent from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import {mapState} from "vuex";
import RESTRequest from "@/mixins/REST";

export default {
  name: 'AntennaSystemDialog',
  data() {
    return {
      selectedMode: '',
      workModeList: ['По программе', 'Автомат']
    }
  },
  mixins: [RESTRequest],
  components: {
    CustomButton,
    DisplayParametersComponent,
  },
  methods: {
    async sendMode() {
      let obj = {id: this.antennaParameters.id.valueParameter}
      obj.workmode = this.antennaParameters.workmode.val_list.indexOf(this.selectedMode)
      let response = await this.sendRESTCommand('http://yii-site/nomenklatura/smotrantennaupdate/' + obj.id, 'POST', null, 'qqq', JSON.stringify(obj))
      if (response.ok) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Режим "' + this.selectedMode + '" установлен'})
      } else {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Не удалось установить Режим "' + this.selectedMode + '". Сервер не отвечает.'})
      }
    }

  },
  computed: {
    ...mapState({
      antennaParameters: state => state.devicesParameters.antennaParameters1.deviceParameters
    }),
    getWorkModeList () {
      if(this.antennaParameters !== undefined) {
        return  this.antennaParameters.workmode.val_list
      } else {
        return this.workModeList
      }
    }
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
