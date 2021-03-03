<template>
  <div class="alarm-tooltip" :title="tooltip">
    <svg viewBox="0 0 100 100" height="100%">
      <defs>
        <filter id="drop-shadow-filter__alarm-lamp">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur>
          <feOffset dx="0" dy="0"></feOffset>
          <feComponentTransfer result="offsetblur">
            <feFuncA id="spread-ctrl" type="linear" slope="3"></feFuncA>
          </feComponentTransfer>
          <feFlood flood-color="rgba(0,0,0,0.3)"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <circle stroke="black" stroke-width="2" :class="colorStatus" cx="50" cy="50" r="40"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AlarmLamp',
  status: '-1',
  props: {
    alarmStatus: {
      type: Number,
      default: -1
    },
    tooltip: {
      type: String,
      default: 'sss'
    }
  },
  computed: {
    colorStatus() {
      if (this.alarmStatus === 1)
        return 'good-status'
      if (this.alarmStatus === 0)
        return 'error-status'

      return 'none-status'
    }
  }
}
</script>

<style scoped>
.alarm-tooltip {
  display: grid;
  align-items: center;
  justify-items: center;
}
.good-status {
  fill: var(--good-color)
}

.error-status {
  fill: var(--error-color)
}

.none-status {
  fill: rgb(218, 218, 218);
}


</style>