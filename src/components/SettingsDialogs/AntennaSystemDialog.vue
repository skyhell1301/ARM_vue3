<template>
  <PopUpWindow name-status="dialogStatus/changeAntennaSystemDialogStatus">
    <DisplayParametersComponent :device-data="antennaParameter"></DisplayParametersComponent>
  </PopUpWindow>
</template>

<script>
import {mapState} from 'vuex'
import PopUpWindow from "@/components/PopUpWindow";
import DisplayParametersComponent from "@/components/Devices/DisplayParametersComponent";
export default {
  name: 'AntennaSystemDialog',
  components: {DisplayParametersComponent, PopUpWindow},
  computed: {
    ...mapState({
        antennaParameter: state => state.ZSParameters.antennaParametersById1
    })
  }
}
</script>

<style scoped>

</style>
