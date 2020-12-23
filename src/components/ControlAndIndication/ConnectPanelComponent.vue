<template>
  <div class="connect-panel">
    <div class="connect-panel-title">ПОДКЛЮЧЕНИЯ</div>
    <div class="ARM-1 little-connect-panel">
      <div class="ARM-1-title">АРМ 1</div>
      <PCIcon class="connect-panel-svg" width="100%" height="90%"></PCIcon>
    </div>
    <div class="ARM-2 little-connect-panel">
      <div class="ARM-2-title">АРМ 2</div>
      <PCIcon class="connect-panel-svg" width="100%" height="90%"></PCIcon>
    </div>
    <div class="CONTROLLER-1 little-connect-panel">
      <div class="CONTROLLER-1-title">КОНТРОЛЛЕР 1</div>
      <ControllerIcon class="connect-panel-svg" width="95%" height="95%"></ControllerIcon>
    </div>
    <div class="CONTROLLER-2 little-connect-panel">
      <div class="CONTROLLER-2-title">КОНТРОЛЛЕР 2</div>
      <ControllerIcon class="connect-panel-svg" width="95%" height="95%"></ControllerIcon>
    </div>
    <div class="CORTEX-1 little-connect-panel">
      <div class="CORTEX-1-title">CORTEX 1</div>
      <CortexIcon class="connect-panel-svg" width="95%" height="95%"></CortexIcon>
    </div>
    <div class="CORTEX-2 little-connect-panel">
      <div class="CORTEX-2-title">CORTEX 2</div>
      <CortexIcon class="connect-panel-svg" width="95%" height="95%"></CortexIcon>
    </div>
    <div class="ARM-AS-1 little-connect-panel">
      <div class="ARM-AS-1-title">АРМ АС 1</div>
      <ControllerIcon class="connect-panel-svg" width="95%" height="95%"></ControllerIcon>
    </div>
    <div class="ARM-AS-2 little-connect-panel">
      <div class="ARM-AS-2-title">АРМ АС 2</div>
      <ControllerIcon class="connect-panel-svg" width="95%" height="95%"></ControllerIcon>
    </div>
  </div>
</template>

<script>
import CortexIcon from '../../assets/images/SVGIconComponents/CortexIcon'
import ControllerIcon from '../../assets/images/SVGIconComponents/ControllerIcon'
import PCIcon from '../../assets/images/SVGIconComponents/PCIcon'
export default {
  name: 'ConnectPanelComponent',
  components: {PCIcon, ControllerIcon, CortexIcon}
}
</script>

<style scoped>
.connect-panel {
  display: grid;
  grid-template-rows: 10% 22.5% 22.5% 22.5% 22.5%;
  grid-template-columns: 50% 50%;
  width: 95%;
  height: 95%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.connect-panel-title {
  grid-column-start: 1;
  grid-column-end: 3;
}

.little-connect-panel {
  display: grid;
  grid-template-rows: 25% 75%;
  width: 95%;
  height: 90%;
  font-size: .6em;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(180deg, #f6f1f5 0%, #f6f1f5 40%, #e2e2e1 50%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.connect-panel-svg {
  fill: #285876;
}

</style>
