<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$t('DevicesParameters.AntennaSystem.titleUI', {type: deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="AntennaSystem"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'AntennaSystemParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['azimut', 'angle', 'scanner', 'workmode', 'signal_lvl'],
    }
  },
  props: {
    inputParameters: {
      type: Object,
      default: null
    },
    deviceId: {
      type: String,
      default: ''
    },
    dialogName: {
      type: String,
      default: 'AntennaSystem',
    }
  },
}
</script>

<style scoped>

</style>
