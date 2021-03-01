<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$tc('DevicesParameters.Converter.titleUI', 0, {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="Converter"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'DownConverterParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['ImpedanceValue', 'InputFrequency', 'OutputFrequency', 'AttenuationValue', 'Voltage15Positive'],
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
      default: 'DownConverter',
    }
  }
}
</script>
