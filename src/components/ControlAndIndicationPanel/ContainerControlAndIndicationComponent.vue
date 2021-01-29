<template>
  <div class="container-control-and-indication">
<!--    <iframe class="clock" src="http://10.10.0.16/clock/index.html"></iframe>-->
    <clock-component class="clock"></clock-component>
    <div class="crash">
      <div class="crash-title">АВАРИЯ</div>
      <ButtonComponent class="btn-1" :active-status="antStatus.status" @btnClick="testChange"></ButtonComponent>
      <EmergencySignalComponent class="signal-bell" status="ok"></EmergencySignalComponent>
    </div>
    <ControlPanelComponent style="grid-row: 5; width: 95%"></ControlPanelComponent>
    <div class="control-background" style="grid-row: 7;">
      <div class="ind-title">ЗЕМНАЯ СТАНЦИЯ</div>
      <ButtonComponent class="btn-2" v-model:active-status="testVar1"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar1"></StatusIndicatorComponent>
    </div>
    <div class="control-background" style="grid-row: 9;">
      <div class="ind-title">БОРТОВАЯ ТЕЛЕМЕТРИЯ</div>
      <ButtonComponent class="btn-2" v-model:active-status="testVar2"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar2"></StatusIndicatorComponent>
    </div>
    <div class="control-background" style="grid-row: 11;">
      <div class="ind-title">АНТЕННАЯ СИСТЕМА</div>
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
      testVar1: false,
      testVar2: false,
      testVar3: false
    }
  },
  methods: {
    testChange() {
      this.$store.dispatch('dialogStatus/changeAntennaSystemDialogStatus', !this.antStatus.status)
    },
    openProtocolDialog() {
      this.$store.dispatch('dialogStatus/changeProtocolDialogStatus', true)
    }
  },
  watch: {
  },
  computed: {
    ...mapState({
      antStatus: state => state.dialogStatus.antennaSystemDialogStatus,
      protocolDialogStatus: state => state.dialogStatus.protocolDialogStatus
    })
  }
}
</script>

<style scoped>
.container-control-and-indication {
  user-select: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7.3% .4% 9.5% .4% 14.5% .4% 7.5% .4% 7.5% .4% 7.5% .4% 29.5% .4% 9.5% .4% 4%;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  font-size: .8em;
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
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(180deg, #f6f1f5 0%, #f6f1f5 40%, #e2e2e1 50%, #fcf7fb 100%);
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
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(180deg, #f6f1f5 0%, #f6f1f5 40%, #e2e2e1 50%, #fcf7fb 100%);
}

.btn-2 {
  grid-row: 2;
  grid-column: 1;
  width: 98%;
  height: 98%;
}

.ind-1 {
  grid-row: 2;
  grid-column: 2;
  width: 98%;
  height: 98%;
}

.ind-title {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  width: 100%;
}
</style>
