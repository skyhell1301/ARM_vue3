<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
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
    title: {
      type: String,
      default: 'КОНВЕРТЕР ВВЕРХ'
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
