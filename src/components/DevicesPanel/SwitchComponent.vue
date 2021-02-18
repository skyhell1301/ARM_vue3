<template>
  <div class="switch-container" @click="rotateStart">
    <div class="background-div"></div>
    <div class="background-rectangle"></div>
    <svg class="svg-element" viewBox="0 0 30 30" preserveAspectRatio="none" :class="{'rotate': isRotate}">
      <g>
        <path class="arc-line" d="M 0 15 C 10 15 15 10 15 0"></path>
        <path class="arc-line" d="M 15 30 C 15 20 20 15 30 15"></path>
      </g>
<!--      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 5px; white-space: pre;" x="10" y="16">1</text>-->
<!--      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 5px; white-space: pre;" x="14" y="12">2</text>-->
<!--      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 5px; white-space: pre;" x="31" y="26">3</text>-->
<!--      <text style="fill: rgb(51, 51, 51); font-family: Roboto Slab; font-size: 5px; white-space: pre;" x="24" y="34">4</text>-->
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      pathForLine1: 'M 0 15 C 10 15 15 10 15 0',
      pathForLine2: 'M 15 30 C 15 20 20 15 30 15',
      rotateValue: 0,
      isRotate: false
    }
  },
  props: {
    port_in_1: {
      type: Number
    },
    port_in_2: {
      type: Number
    }
  },
  methods: {
    rotateStart () {
      this.rotateValue = this.rotateValue === 90 ? 0 : 90
      this.isRotate = !this.isRotate
    },
  },
}
</script>

<style scoped>
.switch-container {
  display: grid;
  position: relative;
  cursor: default;
}
.svg-element {
  grid-row: 1;
  grid-column: 1;
  justify-self: center;
  align-self: center;
  transition: all 0.3s;
}
.background-div {
  height: 100%;
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  background: #d9d9d9;
  box-shadow: 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
  border-radius: 25%;
}
.background-rectangle {
  grid-row: 1;
  grid-column: 1;
  width: 85%;
  height: 85%;
  justify-self: center;
  align-self: center;
  background: #d9d9d9;
  box-shadow: 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
  border-radius: 25%;
}
.arc-line {
  stroke: black;
  stroke-width: 2px;
  shape-rendering: geometricPrecision;
  fill: none;
}
.rotate {
  transform: rotate(90deg);
}
</style>
