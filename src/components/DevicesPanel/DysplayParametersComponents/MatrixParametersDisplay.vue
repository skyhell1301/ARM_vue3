<template>
  <UniversalDisplayComponent class="matrix-up-display"
                             :view-fields-list="viewFields"
                             :title="$tc('DevicesParameters.Matrix.titleUI', deviceId)"
                             :input-parameters="inputParameters"
                             device-type="Matrix"
  />
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'MatrixParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: []
    }
  },
  props: {
    deviceId: {
      type: Number,
      default: 0
    },
    inputParameters: {
      type: Object,
      default: null
    }
  },
}
</script>

<style scoped>
.matrix-up-display {
  font-size: .8em;
  text-transform: capitalize;
}
</style>
