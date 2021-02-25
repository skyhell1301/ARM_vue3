<template>
  <div class="status-indicator__container">
    <svg class="big-circle" viewBox="0 0 80 80" width="100%" height="100%" filter="url(#dropshadow-status-indicator)">
      <circle :class="'color-' + status" class="circle-background" r="40px" cx="40px" cy="40px"></circle>
      <path class="status-indicator__ring" fill="#285876" d="M 80 40 C 80 62.091 62.091 80 40 80 C 17.909 80 0 62.091 0 40 C 0 17.909 17.909 0 40 0 C 62.091 0 80 17.909 80 40 Z M 40 8 C 22.327 8 8 22.327 8 40 C 8 57.673 22.327 72 40 72 C 57.673 72 72 57.673 72 40 C 72 22.327 57.673 8 40 8 Z"></path>
      <filter id="dropshadow-status-indicator" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="0" dy="0" result="offsetblur"/> <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/> <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>
    </svg>
    <svg class="arrows" :class="{'arrows-rotate' : isActive}" viewBox="0 0 80 80" width="100%" height="100%">
      <path d="M 61 37 L 40 39 L 46 32 C 46 32 40 23 31.057 21.06 C 28.581 20.523 24 21 24 21 C 24 21 31.989 15 37 15 C 47 15 54 23 54 23 L 59 17 Z M 18 43 L 39 41 L 33 48 C 33 48 39 57 47.943 58.94 C 50.419 59.477 55 59 55 59 C 55 59 47.011 65 42 65 C 32 65 25 57 25 57 L 20 63 Z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'StatusIndicatorComponent',
  data () {
    return {
      Id: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'none'
    }
  },
}
</script>

<style scoped>
.status-indicator__container {
  display: grid;
}

.big-circle {
  z-index: 1;
  grid-column: 1;
  grid-row: 1;
}

.status-indicator__ring {
  fill: var(--main-color);
}

.circle-background {
  fill: none;
}

.arrows {
  fill: var(--main-color);
  z-index: 2;
  grid-column: 1;
  grid-row: 1;
}
.arrows-rotate {
  animation:spin 8s linear infinite;
}
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
.color-warning {
  fill: var(--warning-color);
}
.color-ok {
  fill: var(--good-color);
}
.color-crash {
  fill: var(--error-color);
}
.color-none {
  fill: none;
}

</style>
