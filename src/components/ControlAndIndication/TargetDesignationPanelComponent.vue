<template>
  <div class="target-designation-panel">
    <div class="target-designation-panel-title">ЦЕЛЕУКАЗАНИЯ</div>
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
  width: 95%;
  height: 95%;
  border: 1px black solid;
  border-radius: 7px;
  background: linear-gradient(45deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
  font-size: 1em;
}

.target-designation-panel-data {
  border: 1px black solid;
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
</style>
