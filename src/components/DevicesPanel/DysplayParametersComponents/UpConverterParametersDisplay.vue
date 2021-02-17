<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$tc('DevicesParameters.Converter.titleUI', 1, {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="Converter"
  ></UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'UpConverterParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['ImpedanceValue', 'InputFrequency', 'OutputFrequency', 'AttenuationValue', 'Voltage15Positive'],
    }
  },
  props: {
    deviceId: {
      type: String,
      default: ''
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'UpConverter',
    }
  },
}
</script>

<style scoped>

</style>
