<template>
  <div class="control-and-indication__wrapper" aria-disabled="true">
    <clock-component class="clock"></clock-component>
    <div class="crash">
      <div class="crash-title">{{$t('Interface.crash')}}</div>
      <ButtonComponent class="btn-1"></ButtonComponent>
      <EmergencySignalComponent class="signal-bell" status="ok"></EmergencySignalComponent>
    </div>
    <ControlPanelComponent style="grid-row: 5; width: 95%"></ControlPanelComponent>
    <div class="control-background" style="grid-row: 7;">
      <div class="ind-title">{{$t('Interface.ground_station')}}</div>
      <ButtonComponent class="btn-2" :active-status="monitoringState" @btnClick="sendZSMonitoringStatus"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="monitoringState" :status="monitoringType"></StatusIndicatorComponent>
    </div>
    <div class="control-background" style="grid-row: 9;">
      <div class="ind-title">{{$t('Interface.onboard_telemetry')}}</div>
      <ButtonComponent class="btn-2" :active-status="monitoringState" @btnClick="sendIgorRequest"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="monitoringState"></StatusIndicatorComponent>
    </div>
    <div class="control-background" style="grid-row: 11;">
      <div class="ind-title">{{$t('Interface.antenna_system')}}</div>
      <ButtonComponent class="btn-2" v-model:active-status="testVar3"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar3"></StatusIndicatorComponent>
    </div>
    <ConnectPanelComponent style="width: 95%; grid-row: 13;"></ConnectPanelComponent>
    <TargetDesignationPanelComponent style="width: 95%; grid-row: 15;"></TargetDesignationPanelComponent>
    <ProtocolButtonComponent style="width: 95%; grid-row: 17;" @click="openProtocolDialog"></ProtocolButtonComponent>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonComponent from './ButtonComponent'
import EmergencySignalComponent from './EmergencySignalComponent'
import StatusIndicatorComponent from './StatusIndicatorComponent'
import ControlPanelComponent from './ControlPanelComponent'
import ConnectPanelComponent from './ConnectPanelComponent'
import TargetDesignationPanelComponent from './TargetDesignationPanelComponent'
import ProtocolButtonComponent from './ProtocolButtonComponent'
import ClockComponent from "@/components/ControlAndIndicationPanel/ClockComponent";
import REST from "@/mixins/REST";
export default {
  name: 'ContainerControlAndIndicationComponent',
  components: {
    ClockComponent,
    ProtocolButtonComponent,
    TargetDesignationPanelComponent,
    ConnectPanelComponent,
    ControlPanelComponent,
    StatusIndicatorComponent,
    EmergencySignalComponent,
    ButtonComponent
  },
  data () {
    return {
      ZSMonitoringStatus: false,
      testVar2: false,
      testVar3: false
    }
  },
  mixins: [REST],
  methods: {
    openProtocolDialog() {
      this.$store.dispatch('dialogStatus/changeProtocolDialogStatus', true)
    },
    async sendZSMonitoringStatus() {
      if (this.getMainConnectionAddress === null && this.getMainConnectionAddress !== undefined) {
        this.$store.dispatch('protocol/addLogMessage', {text: 'Отсутствует подключение к АРМу'})
      } else {
        let context = this
        let message = {}
        message.state = !context.monitoringState
        message.type = 'gsMonitoring'
        let response = await this.sendRESTCommand('http://' + this.getMainConnectionAddress + '/monitoring/state', 'POST', null, 'qqq', JSON.stringify(message))
        response.text().then(function (text) {
          console.log(text)
          context.$store.dispatch('protocol/addLogMessage', {text: text})
        })
      }
    },
    async sendIgorRequest () {
      let context = this
      let message = {}
      message.state = !context.monitoringState
      message.type = 'gsMonitoring'
      let response = await this.sendRESTCommand(this.igorUrl, 'POST', null, 'qqq', JSON.stringify(message))
      // let response = RESTRequest.methods.sendCommand('api/monitoring/state', 'POST', null, 'qqq', JSON.stringify(message))
      // console.log(response)
      response.text().then(function (text) {
        console.log(text)
        context.$store.dispatch('protocol/addLogMessage', {text: text})
      })
    }
  },
  watch: {
  },
  computed: {
    ...mapState({
      protocolDialogStatus: state => state.dialogStatus.protocolDialogStatus,
      monitoringState: state => state.ZSParameters.monitoringState,
      monitoringType: state => state.ZSParameters.monitoringType,
      igorUrl: state => state.ZSParameters.igorUrl
    }),
    getMainConnectionAddress () {
      return this.$store.getters['wsConnectionList/getMainConnectionAddress']
    }
  }
}
</script>

<style scoped>
.control-and-indication__wrapper {
  /*box-shadow: 0px 0px 5px .5px rgba(172, 172, 172, 0.8);*/
  user-select: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5.3% .4% 9.5% .4% 15.5% .4% 7.5% .4% 7.5% .4% 7.5% .4% 30.5% .4% 9.5% .4% 4%;
  justify-self: end;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  font-size: .8em;
  color: var(--main-color);
}
.clock {
  width: 95%;
  height: 100%;
  border: none;

}

.crash {
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 20% 80%;
  width: 95%;
  height: 100%;
  border-radius: 7px;
  box-shadow: 0px 0px 3px .5px rgba(88, 88, 88, 0.8);
  background: linear-gradient(135deg, #f6f1f5 0%, #fcf7fb 100%);
  grid-row: 3;
}

.btn-1 {
  grid-row: 2;
  grid-column: 1;
  width: 90%;
  height: 90%;
  align-self: center;
  justify-self: center;
}
.signal-bell {
  grid-row: 2;
  grid-column: 2;
  width: 92%;
  height: 100%;
  align-self: center;
  justify-self: center;
}
.crash-title {
  text-transform: uppercase;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  width: 100%;
  font-weight: bold;
}
.control-background {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 70%;
  width: 95%;
  height: 100%;
  box-shadow: 0px 0px 3px .5px rgba(88, 88, 88, 0.8);
  border-radius: 7px;
  background: linear-gradient(135deg, #f6f1f5 0%, #fcf7fb 100%);
}

.btn-2 {
  height: 95%;
  grid-row: 2;
  grid-column: 1;
  justify-self: center;
  /*width: 98%;*/
  /*height: 98%;*/
}

.ind-1 {
  grid-row: 2;
  grid-column: 2;
  height: 95%;
}

.ind-title {
  text-transform: uppercase;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  width: 100%;
}
</style>
