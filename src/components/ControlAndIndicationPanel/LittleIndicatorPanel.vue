<template>
  <div class="little-indicator-panel__wrapper">
    <div class="little-indicator-panel__container" :class="'color-' + getIndicatorStatus">
      <div class="little-indicator-panel__title">
        <div>{{title}}</div>
      </div>
      <div class="little-indicator-panel__icon">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LittleIndicatorPanel',
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    connection: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    getIndicatorStatus () {
      return this.connection ? 'ok' : 'none'
    }
  }
}
</script>

<style scoped>
.little-indicator-panel__wrapper {
  background: linear-gradient(180deg, #f6f1f5 0%, #f6f1f5 40%, #e2e2e1 50%, #fcf7fb 100%);
  border: 1px black solid;
  border-radius: 7px;
  display: flex;
  width: 100%;
  height: 100%;
  color: #285876;
  fill: #285876;
}

.little-indicator-panel__container {
  border-radius: 7px;
  display: grid;
  grid-template-rows: 25% 75%;
  width: 100%;
  height: 100%;
  font-size: .7em;
  justify-items: center;
  align-items: center;
}

.little-indicator-panel__title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.little-indicator-panel__icon {
  height: 80%;
  width: 90%;

}
.color-warning {
  background: linear-gradient(130deg, #ffe191 0%, #ffcc00 40%, #ffcc00 50%, #ffe191 100%);
}
.color-ok {
  background: linear-gradient(130deg, #8cf382 0%, #50d044 40%, #50d044 50%, #8cf382 100%);

}
.color-error {
  background: linear-gradient(130deg, #ff5252 0%, #ff3333 40%, #ff3333 50%, #ff9696 100%);
}
.color-none {
  background: none;
}

</style>
