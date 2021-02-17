<template>
  <UniversalDisplayComponent :is-settings-button="false"
                             :view-fields-list="viewFields"
                             :title="$t('DevicesParameters.MSHU.titleUI', {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="MSHU"
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
    deviceId: {
      type: String,
      default: '0'
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
