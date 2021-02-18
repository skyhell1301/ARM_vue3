<template>
  <div class="emergency-signal-container">
    <svg viewBox="0 0 80 45" width="100%" height="100%" filter="url(#dropshadow)" :class="'color-' + status">
      <path style="" d="M 9.56 0 L 13.684 4.5 C 13.684 4.5 5.436 13.5 5.436 22.499 C 5.436 31.499 13.684 40.499 13.684 40.499 L 9.56 45 C 9.56 45 0 35.999 0 22.499 C 0 9 9.56 0 9.56 0 Z M 15.74 6.429 L 18.898 9.643 C 18.898 9.643 12.582 16.071 12.582 22.499 C 12.582 28.928 18.898 35.357 18.898 35.357 L 15.74 38.571 C 15.74 38.571 8.421 32.143 8.421 22.499 C 8.421 12.857 15.74 6.429 15.74 6.429 Z M 21.053 11.786 L 23.158 13.928 C 23.158 13.928 18.947 18.214 18.947 22.499 C 18.947 26.786 23.158 31.071 23.158 31.071 L 21.053 33.214 C 21.053 33.214 16.174 28.928 16.174 22.499 C 16.174 16.071 21.053 11.786 21.053 11.786 Z M 70.44 45 L 66.316 40.499 C 66.316 40.499 74.564 31.499 74.564 22.499 C 74.564 13.5 66.316 4.5 66.316 4.5 L 70.44 0 C 70.44 0 80 9 80 22.499 C 80 35.999 70.44 45 70.44 45 Z M 64.26 38.571 L 61.102 35.357 C 61.102 35.357 67.418 28.928 67.418 22.499 C 67.418 16.071 61.102 9.643 61.102 9.643 L 64.26 6.429 C 64.26 6.429 71.579 12.857 71.579 22.499 C 71.579 32.143 64.26 38.571 64.26 38.571 Z M 58.947 33.214 L 56.842 31.071 C 56.842 31.071 61.053 26.786 61.053 22.499 C 61.053 18.214 56.842 13.928 56.842 13.928 L 58.947 11.786 C 58.947 11.786 63.826 16.071 63.826 22.499 C 63.826 28.928 58.947 33.214 58.947 33.214 Z">
        <title>wave</title>
      </path>
      <path d="M 40 36.428 C 35.789 36.428 35.789 32.143 35.789 32.143 L 44.211 32.143 C 44.211 32.143 44.211 36.428 40 36.428 Z">
        <title>tongue</title>
      </path>
      <path d="M 25.263 32.143 C 25.263 32.143 25.263 28.928 26.316 26.786 C 27.368 24.643 28.837 23.092 29.474 21.429 C 30.526 19.285 29.474 14.406 30.526 10.714 C 33.684 3.214 40 3.647 40 3.647 L 40 3.643 C 40 3.643 46.316 3.214 49.474 10.714 C 50.526 14.406 49.474 19.285 50.526 21.429 C 51.163 23.092 52.632 24.643 53.684 26.786 C 54.737 28.928 54.737 32.143 54.737 32.143 Z">
        <title>bell</title>
      </path>
      <path class="bell" d="M 25.263 32.143 C 25.263 32.143 25.263 28.928 26.316 26.786 C 27.368 24.643 28.837 23.092 29.474 21.429 C 30.526 19.285 29.474 14.406 30.526 10.714 C 33.684 3.214 40 3.647 40 3.647 L 40 3.643 C 40 3.643 46.316 3.214 49.474 10.714 C 50.526 14.406 49.474 19.285 50.526 21.429 C 51.163 23.092 52.632 24.643 53.684 26.786 C 54.737 28.928 54.737 32.143 54.737 32.143 Z">
        <title>bell</title>
      </path>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
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
  </div>
</template>

<script>
export default {
  name: 'EmergencySignalComponent',
  data () {
    return {
      Id: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })()
    }
  },
  props: {
    status: {
      type: String,
      default: 'crash'
    }
  }
}
</script>

<style scoped>
.color-warning {
  fill: #fcff27;
}
.color-ok {
  fill: #45c745;
}
.color-crash {
  fill: #f90022;
}

.bell {
  fill: url(#Gradient-bell)
}
</style>
