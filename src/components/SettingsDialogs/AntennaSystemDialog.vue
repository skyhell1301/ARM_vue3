<template>
  <PopUpWindow name-status="dialogStatus/changeAntennaSystemDialogStatus">
    <div class="ass"> Антенная система</div>
  </PopUpWindow>
</template>

<script>
import PopUpWindow from "@/components/PopUpWindow";
export default {
  name: 'AntennaSystemDialog',
  components: {PopUpWindow}
}
</script>

<style scoped>
.ass {
  width: 300px;
  height: 300px;
}
</style>
