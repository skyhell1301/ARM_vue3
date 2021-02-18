<template>
  <div class="control-panel">
    <div class="control-title">{{$t('Interface.control')}}</div>
    <div class="OM-TSU-O little-control-panel">
      <div class="OM-TSU-O-title">ОМ ТСУ-О</div>
      <PCIcon class="control-panel-svg" width="100%" height="90%"></PCIcon>
    </div>
    <div class="OM-TSU-P little-control-panel">
      <div class="OM-TSU-P-title">ОМ ТСУ-Р</div>
      <PCIcon class="control-panel-svg" width="100%" height="90%"></PCIcon>
    </div>
    <div class="ZS-CKU-O little-control-panel">
      <div class="OM-TSU-P-title">ЗС СКУ-О</div>
      <AntennaIcon class="control-panel-svg" height="90%" width="100%"></AntennaIcon>
    </div>
    <div class="ZS-CKU-P little-control-panel">
      <div class="OM-TSU-P-title">ЗС СКУ-Р</div>
      <AntennaIcon class="control-panel-svg" height="90%" width="100%"></AntennaIcon>
    </div>
  </div>
</template>

<script>
import AntennaIcon from '../../assets/images/SVGIconComponents/AntennaIcon'
import PCIcon from '../../assets/images/SVGIconComponents/PCIcon'
export default {
  name: 'ControlPanelComponent',
  components: {PCIcon, AntennaIcon}
}
</script>

<style scoped>
.control-panel {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 14% 43% 43%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 3px .5px rgba(88, 88, 88, 0.8);
  border-radius: 7px;
  background: linear-gradient(135deg, #f6f1f5 0%, #fcf7fb 100%);
  justify-items: center;
  align-items: center;
}

.control-title {
  text-transform: uppercase;
  grid-column-start: 1;
  grid-column-end: 3;
}

.little-control-panel {
  display: grid;
  grid-template-rows: 30% 70%;
  justify-items: center;
  align-items: center;
  width: 95%;
  height: 90%;
  font-size: .6em;
  box-shadow: 0px 0px 2px .5px rgba(88, 88, 88, 0.8);
  border-radius: 7px;
  background: linear-gradient(135deg, #f6f1f5 0%, #fcf7fb 100%);
}
.control-panel-svg {
  align-self: start;
  fill: #285876;
}
</style>
