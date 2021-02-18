<template>
  <div class="btn-container">
    <svg class="background" viewBox="0 0 80 80">

      <filter id="dropShadow-1">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.2"></feGaussianBlur>
        <feOffset dx="0" dy="0"></feOffset>
        <feComponentTransfer result="offsetblur">
          <feFuncA id="spread-ctrl" type="linear" slope="2"></feFuncA>
        </feComponentTransfer>
        <feFlood flood-color="rgba(88,88,88,0.8)"></feFlood>
        <feComposite in2="offsetblur" operator="in"></feComposite>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>

      <filter id="dropShadow_hover">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur>
        <feOffset dx="0" dy="0"></feOffset>
        <feComponentTransfer result="offsetblur">
          <feFuncA id="spread-ctrl" type="linear" slope="1.2"></feFuncA>
        </feComponentTransfer>
        <feFlood flood-color="rgba(230,230,230,0.8)"></feFlood>
        <feComposite in2="offsetblur" operator="in"></feComposite>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>

      <circle class="background-circle-2" r="40px" cx="40" cy="40"></circle>
      <g :id="'btn-' + Id" ref="btnRef" class="button-circle" :class="{'pressed-button':btnStatus}" >
        <circle r="35px" cx="40" cy="40"></circle>
        <path class="flare" :class="{'flare-pressed':btnStatus}" d="M 38 18 L 42 18 L 42 42 L 38 42 L 38 18 Z M 33 30 C 33 30 28 34 28 40 C 28 46 31.394 52 40 52 C 48.606 52 52 46 52 40 C 52 34 47 30 47 30 L 50 27 C 50 27 56 31 56 40 C 56 52 46 56 40 56 C 34 56 24 52 24 40 C 24 31 30 27 30 27 L 33 30 Z"></path>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  data () {
    return {
      Id: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      btnStatus: false
    }
  },
  props: {
    activeStatus: {
      type: Boolean,
      default: false
    }
  },
  emits: ['btnClick', 'update:activeStatus'],
  methods: {
    btnClick () {
      this.$emit('update:activeStatus', !this.activeStatus)
      this.$emit('btnClick')
      this.btnStatus = !this.btnStatus
      let context = this
      setTimeout( () => {
        if(context.activeStatus !== context.btnStatus) {
          context.btnStatus = context.activeStatus
        }
      }, 2000)
    }
  },
  watch: {
    activeStatus () {
      this.btnStatus = this.activeStatus
    }
  },
  mounted() {
    this.$refs.btnRef.addEventListener('click', this.btnClick)
  }
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  fill: white;
  filter:url(#dropShadow-1);
}
.background-circle-1 {
  fill:url(#Gradient-1);
}
.background-circle-2 {
  /*fill:url(#Gradient-2);*/
  fill: #e7e7e7;
}

.button-circle {
  transform-origin: 50% 50%;
  transition: all 0.2s ease;
  cursor: pointer;
  filter: url(#dropShadow-1);
  fill: #285876;
}
.button-circle:hover path{
  filter: url(#dropShadow_hover);
}

.flare {
  fill: rgb(255, 255, 255);
}
.flare-pressed {
  fill: rgba(0,213,255,0.9);
}

.pressed-button {
  filter: url(#dropShadow_hover);
  transform: scale(.8);
}
@keyframes press {
  0% {
    transform: scale(1);
  }
  100%{
    transform: scale(.8);
  }
}
</style>
