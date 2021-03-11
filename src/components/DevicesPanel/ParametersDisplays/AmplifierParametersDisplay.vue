<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$t('DevicesParameters.Amplifier.titleUI', {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="Amplifier"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'AmplifierParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['power_rf', 'rfinhibit', 'cabinet_temperature', 'differential_temperature'],
    }
  },
  props: {
    inputParameters: {
      type: Object,
      default: null
    },
    deviceId: {
      type: String,
      default: '0'
    },
    dialogName: {
      type: String,
      default: 'Amplifier',
    }
  },
}
</script>

<style scoped>

</style>
