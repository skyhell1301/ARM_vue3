<template>
  <div class="container-control-and-indication">
    <iframe class="clock" src="http://10.10.0.16/clock/index.html"></iframe>
<!--    <iframe class="clock" src="http://localhost:8080/#/clock"></iframe>-->
    <div class="crash">
      <div class="crash-title">АВАРИЯ</div>
      <ButtonComponent class="btn-1"></ButtonComponent>
      <EmergencySignalComponent class="signal-bell" status="ok"></EmergencySignalComponent>
    </div>
    <ControlPanelComponent></ControlPanelComponent>
    <div class="control-background">
      <div class="ind-title">ЗЕМНАЯ СТАНЦИЯ</div>
      <ButtonComponent class="btn-2" @btnClick="testVar1=!testVar1"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar1"></StatusIndicatorComponent>
    </div>
    <div class="control-background">
      <div class="ind-title">БОРТОВАЯ ТЕЛЕМЕТРИЯ</div>
      <ButtonComponent class="btn-2" @btnClick="testVar2=!testVar2"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar2"></StatusIndicatorComponent>
    </div>
    <div class="control-background">
      <div class="ind-title">АНТЕННАЯ СИСТЕМА</div>
      <ButtonComponent class="btn-2" @btnClick="testVar3=!testVar3"></ButtonComponent>
      <StatusIndicatorComponent class="ind-1" :is-active="testVar3"></StatusIndicatorComponent>
    </div>
    <ConnectPanelComponent></ConnectPanelComponent>
    <TargetDesignationPanelComponent></TargetDesignationPanelComponent>
    <ProtocolButtonComponent></ProtocolButtonComponent>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent'
import EmergencySignalComponent from './EmergencySignalComponent'
import StatusIndicatorComponent from './StatusIndicatorComponent'
import ControlPanelComponent from './ControlPanelComponent'
import ConnectPanelComponent from './ConnectPanelComponent'
import TargetDesignationPanelComponent from './TargetDesignationPanelComponent'
import ProtocolButtonComponent from './ProtocolButtonComponent'
export default {
  name: 'ContainerControlAndIndicationComponent',
  components: {
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
  }
}
</script>

<style scoped>
.container-control-and-indication {
  user-select: none;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 7% 10% 15% 8% 8% 8% 30% 10% 4%;
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
  height: 95%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(180deg, #f6f1f5 0%, #f6f1f5 40%, #e2e2e1 50%, #fcf7fb 100%);
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
  height: 95%;
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
