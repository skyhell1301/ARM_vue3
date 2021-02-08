<template>
  <div class="switch-container" @click="rotateStart">
    <div class="background-div"></div>
    <div class="background-rectangle"></div>
    <svg class="svg-element" viewBox="0 0 30 30" preserveAspectRatio="none">
      <g :id="'rotate-' + ID">
        <path class="arc-line" d="M 0 15 C 10 15 15 10 15 0"></path>
        <path class="arc-line" d="M 15 30 C 15 20 20 15 30 15"></path>
        <circle :id="ID" class="switch-motion-object" style="fill: rgba(134, 218, 82, 0.9);" cx="4" cy="4" r="4"></circle>
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
      rotateValue: 0
    }
  },
  props: {
    animationDuration: {
      type: Number,
      default: 5
    },
    port_in_1: {
      type: Number
    },
    port_in_2: {
      type: Number
    }
  },
  methods: {
    rotateStart () {
      // gsap.set('#' + 'rotate-' + this.ID, {transformOrigin: '50% 50%'})
      this.rotateValue = this.rotateValue === 90 ? 0 : 90
      // gsap.to('#' + 'rotate-' + this.ID, {duration: 1, repeat: 0, rotation: this.rotateValue})
    },
    startAnimation () {
      // gsap.set('#' + this.ID, {xPercent: -50, yPercent: -50, transformOrigin: '50% 50%', opacity: 1})
      // let move = gsap.to('#' + this.ID, {duration: this.animationDuration, repeat: 0, motionPath: this.pathForLine1, ease: 'linear', runBackwards: true})
      // move.eventCallback('onComplete', this.endAnimation)
    },
    endAnimation () {
      // gsap.set('#' + this.ID, {opacity: 0})
      this.$emit('onComplete')
    }
  },
  mounted () {
    // gsap.registerPlugin(MotionPathPlugin)
  }
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
}
.background-div {
  height: 100%;
  width: 100%;
  grid-row: 1;
  grid-column: 1;
  background: linear-gradient(135deg, rgba(235,235,235,1) 0%, rgb(123, 122, 122) 61%, rgba(166,166,166,1) 100%);
  box-shadow: 0px 0px 2px 1px rgba(148,148,148,0.71);
  border-radius: 25%;
}
.background-rectangle {
  grid-row: 1;
  grid-column: 1;
  width: 85%;
  height: 85%;
  justify-self: center;
  align-self: center;
  background: linear-gradient(45deg, rgb(158, 158, 158) 0%, rgb(247, 247, 247) 100%);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
  border-radius: 25%;
}
.arc-line {
  stroke: black;
  stroke-width: 2px;
  shape-rendering: geometricPrecision;
  fill: none;
}
.switch-motion-object {
  opacity: 0;
}
</style>
