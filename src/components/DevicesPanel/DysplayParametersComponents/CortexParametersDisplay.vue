<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="'Cortex #' + deviceId"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="Cortex"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'CortexParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: [],
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
      default: 'Cortex',
    }
  },
}
</script>

<style scoped>
</style>
