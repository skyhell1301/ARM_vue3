<template>
  <div class="target-designation-panel">
    <div class="target-designation-panel-title">{{$t('Interface.target_designation')}}</div>
    <div class="target-designation-panel-data">
      <div class="test"></div>
      <div class="ZU-type">
        <div class="ZU-title">ТИП ЦУ:</div>
        <div class="ZU-value">данные</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TargetDesignationPanelComponent'
}
</script>

<style scoped>
.target-designation-panel {
  display: grid;
  grid-template-rows: 20% 80%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 3px .5px rgba(88, 88, 88, 0.8);
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
  font-size: 1em;
}

.target-designation-panel-data {
  box-shadow: inset 0px 0px 2px .5px rgba(88, 88, 88, 0.8);
  border-radius: 5px;
  width: 95%;
  height: 90%;
  display: grid;
  grid-template-rows: 80% 20%;
}

.ZU-type {
  font-size: .8em;
  display: grid;
  grid-template-columns: 30% 70%;
}

.target-designation-panel-title {
  text-transform: uppercase;
}
</style>
