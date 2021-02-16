<template>
  <div class="connect-panel">
    <div class="connect-panel-title">ПОДКЛЮЧЕНИЯ</div>
    <LittleIndicatorPanel :connection="ARM1Status.connection" class="ARM-1 little-panel" title="АРМ 1">
      <PCIcon class="connect-panel__icon"></PCIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel :connection="ARM2Status.connection" class="ARM-2 little-panel" title="АРМ 2">
      <PCIcon class="connect-panel__icon"></PCIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="CONTROLLER-1 little-panel" title="КОНТРОЛЛЕР 2">
      <ControllerIcon class="connect-panel__icon"></ControllerIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="CONTROLLER-2 little-panel" title="КОНТРОЛЛЕР 2">
      <ControllerIcon class="connect-panel__icon"></ControllerIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="CORTEX-1 little-panel" title="CORTEX 1">
      <CortexIcon class="connect-panel__icon"></CortexIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="CORTEX-2 little-panel" title="CORTEX 2">
      <CortexIcon class="connect-panel__icon"></CortexIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="ARM-AS-1 little-panel" title="АРМ АС 1">
      <ControllerIcon class="connect-panel__icon"></ControllerIcon>
    </LittleIndicatorPanel>
    <LittleIndicatorPanel class="ARM-AS-2 little-panel" title="АРМ АС 2">
      <ControllerIcon class="connect-panel__icon"></ControllerIcon>
    </LittleIndicatorPanel>
  </div>
</template>

<script>
import CortexIcon from '../../assets/images/SVGIconComponents/CortexIcon'
import ControllerIcon from '../../assets/images/SVGIconComponents/ControllerIcon'
import PCIcon from '../../assets/images/SVGIconComponents/PCIcon'
import LittleIndicatorPanel from "@/components/ControlAndIndicationPanel/LittleIndicatorPanel";
export default {
  name: 'ConnectPanelComponent',
  components: {LittleIndicatorPanel, PCIcon,
    ControllerIcon,
    CortexIcon
  },
  computed: {
    ARM1Status () {
      return this.$store.getters['wsConnectionList/ARM1Status']
    },
    ARM2Status () {
      return this.$store.getters['wsConnectionList/ARM2Status']
    },
  }
}
</script>

<style scoped>
.connect-panel {
  display: grid;
  grid-template-rows: 10% 22.5% 22.5% 22.5% 22.5%;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
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

.little-panel {
  width: 95%;
  height: 93%;
}

.connect-panel__icon {
  width: 100%;
  height: 100%;
}
</style>
