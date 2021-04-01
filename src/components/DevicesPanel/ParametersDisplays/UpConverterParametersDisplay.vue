<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$tc('DevicesParameters.Converter.titleUI', 1, {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="Converter"
                             :is-footer="isLamp"
  >
    <div class="lamp-stack__wrapper">
      <div class="lamp-stack" >
        <AlarmLamp class="lamp" v-for="alarm in AlarmList" :alarm-status="alarm.valueParameter"
                   :key="alarm.id" :tooltip="$t('DevicesParameters.Converter.' +  Object.keys(AlarmList).find(key => AlarmList[key] === alarm))"

        >
        </AlarmLamp>
      </div>
    </div>
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
import AlarmLamp from "@/components/CustomSimpleComponents/AlarmLamp";

export default {
  name: 'UpConverterParametersDisplay',
  components: {AlarmLamp, UniversalDisplayComponent},
  data() {
    return {
      viewFields: ['ImpedanceValue', 'InputFrequency', 'OutputFrequency', 'AttenuationValue', 'Voltage15Positive'],
      AlarmList: {},
      isLamp: false
    }
  },
  props: {
    deviceId: {
      type: String,
      default: ''
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'UpConverter',
    }
  },
  watch: {
    inputParameters: function () {
      if(this.inputParameters?.deviceParameters) {
        this.AlarmList.TemperatureAlarm = this.inputParameters?.deviceParameters?.TemperatureAlarm
        delete this.inputParameters?.deviceParameters.TemperatureAlarm

        this.AlarmList.LoggedAlarm = this.inputParameters?.deviceParameters?.LoggedAlarm
        delete this.inputParameters?.deviceParameters.LoggedAlarm

        this.AlarmList.LocalOscillatorLockAlarm = this.inputParameters?.deviceParameters?.LocalOscillatorLockAlarm
        delete this.inputParameters?.deviceParameters.LocalOscillatorLockAlarm

        this.AlarmList.PowerSupplyAlarm = this.inputParameters?.deviceParameters?.PowerSupplyAlarm
        delete this.inputParameters?.deviceParameters.PowerSupplyAlarm

        this.AlarmList.LocalOscillatorLevelAlarm = this.inputParameters?.deviceParameters?.LocalOscillatorLevelAlarm
        delete this.inputParameters?.deviceParameters.LocalOscillatorLevelAlarm

        this.AlarmList.AmlifierCurrentAlarm = this.inputParameters?.deviceParameters?.AmlifierCurrentAlarm
        delete this.inputParameters?.deviceParameters.AmlifierCurrentAlarm

        this.AlarmList.ExternalAlarm = this.inputParameters?.deviceParameters?.ExternalAlarm
        delete this.inputParameters?.deviceParameters.ExternalAlarm

        this.AlarmList.ModuleCommunicationsAlarm = this.inputParameters?.deviceParameters?.ModuleCommunicationsAlarm
        delete this.inputParameters?.deviceParameters.ModuleCommunicationsAlarm

        this.AlarmList.UserTestAlarm = this.inputParameters?.deviceParameters?.UserTestAlarm
        delete this.inputParameters?.deviceParameters.UserTestAlarm

        this.isLamp = true
      } else {
        this.isLamp = false
        this.AlarmList = {}
      }
    }
  }
}
</script>

<style scoped>
.lamp-stack__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  top: -9%;
  box-shadow: inset 0px 0px 3px 0.3px rgba(130, 130, 130, 0.8);
  justify-self: center;
  height: 100%;
  width: 95%;
}

.lamp-stack {
  display: flex;
  height: 100%;
  width: 70%;
  justify-self: center;
  justify-content: space-between;

}

.lamp {
  align-self: center;
  height: 90%;
}
</style>
