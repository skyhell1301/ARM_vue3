<template>
  <UniversalDisplayComponent :is-settings-button="false"
                             :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'MSHUParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['voltage_a', 'voltage_b', 'current', 'current_limit']
    }
  },
  props: {
    title: {
      type: String,
      default: 'МШУ'
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'MSHU',
    }
  },
}
</script>

<style scoped>
</style>
