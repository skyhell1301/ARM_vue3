<template>
  <div class="ground-container" :id="'ground-container-' + ID">
    <svg class="svg-ground-element" viewBox="0 0 30 15" preserveAspectRatio="none">
      <line x1="15" y1="0" x2="15" y2="30" stroke="black" stroke-width="2px"></line>
      <line x1="0" y1="14" x2="30" y2="14" stroke="black" stroke-width="3px"></line>
    </svg>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'GroundComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })()
    }
  },
  props: {
    rotateAngle: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    gsap.set('#' + 'ground-container-' + this.ID, {rotate: this.rotateAngle})
  }
}
</script>

<style scoped>
.ground-container {
  display: grid;
}
.svg-ground-element {
  justify-self: end;
}
</style>
