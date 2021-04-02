<template>
  <div class="switch-container">
    <div class="background-div"></div>
    <div class="background-rectangle"></div>
    <svg class="svg-element" viewBox="0 0 30 30" preserveAspectRatio="none" :class="{'rotate': isReserved}">
      <g>
        <path class="arc-line" :d="pathForLine1" :class="{'connect-status': isMonitoring}"></path>
        <path class="arc-line" :d="pathForLine2"></path>
<!--        <line x1="15" y1="0" x2="15" y2="30" stroke-width="2px" stroke="black"></line>-->
<!--        <line x1="0" y1="15" x2="30" y2="15" stroke-width="2px" stroke="black"></line>-->
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  data () {
    return {
      pathForLine1: 'M 0 15 C 10 15 15 10 15 0',
      pathForLine2: 'M 15 30 C 15 20 20 15 30 15',
    }
  },
  props: {
    isReserved: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isMonitoring() {
      return this.$store.state.ZSParameters.monitoringState
    }
  }
}
</script>

<style scoped>
.switch-container {
  display: grid;
  cursor: default;
  justify-items: center;
  align-items: center;
}
.svg-element {
  grid-row: 1;
  grid-column: 1;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
}
.background-div {
  height: 100%;
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  background: #d9d9d9;
  box-shadow: 0 0 0.5px 0.5px rgba(130, 130, 130, 0.8);
  /*border: 0.5px solid rgba(130, 130, 130, 0.8);*/
  border-radius: 5px;
}
.background-rectangle {
  grid-row: 1;
  grid-column: 1;
  width: 85%;
  height: 85%;
  justify-self: center;
  align-self: center;
  background: #d9d9d9;
  box-shadow: 0px 0px 3px 1px rgba(180, 180, 180, 0.8);
  border-radius: 5px;
}
.arc-line {
  stroke: #285876;
  stroke-width: 0.1vmax;
  shape-rendering: geometricPrecision;
  fill: none;
}
.rotate {
  transform: rotate(90deg);
}
.connect-status {
  stroke: var(--line-connect-color);
}
</style>
