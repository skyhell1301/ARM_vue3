<template>
  <div class="little-indicator-panel__wrapper">
    <div class="little-indicator-panel__container" :class="'color-' + status">
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
    status: {
      type: String,
      default: 'none'
    }
  }
}
</script>

<style scoped>
.little-indicator-panel__wrapper {
  background: linear-gradient(135deg, #f6f1f5 0%, #fcf7fb 100%);
  box-shadow: 0px 0px 2px .5px rgba(88, 88, 88, 0.8);
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
  //background: linear-gradient(130deg, #FFF51C 0%, #FFF51C 40%, #FFF51C 50%, #FFF51C 100%);
  background: var(--warning-color);
}
.color-ok {
  //background: linear-gradient(130deg, #66FF66 0%, #66FF66 40%, #66FF66 50%, #66FF66 100%);
  background: var(--good-color);
  //background: #66FF66;
 }
.color-error {
  background: var(--error-color);
  //background: linear-gradient(130deg, #ff3636 0%, #ff3636 40%, #ff3636 50%, #ff3636 100%);
}
.color-none {
  background: none;
}

</style>
