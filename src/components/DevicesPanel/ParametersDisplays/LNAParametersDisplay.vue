<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="$t('DevicesParameters.LNA.titleUI', {type: '#' + deviceId})"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             device-type="LNA"
  >
  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'LNAParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Current', 'Status', 'ControlMode', 'MaxCurrent']
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
      default: 'LNA',
    }
  },
}
</script>