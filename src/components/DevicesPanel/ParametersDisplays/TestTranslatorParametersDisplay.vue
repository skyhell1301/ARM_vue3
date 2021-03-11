<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             :title="$t('DevicesParameters.TestTranslyator.titleUI', {type: deviceId})"
                             device-type="TestTranslyator"
                             >

  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'TestTranslyatorParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['OutputFrequency', 'AttenuationValue', 'Voltage15Positive']
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
      default: 'TestTranslator',
    }
  },
}
</script>

<style scoped>

</style>
