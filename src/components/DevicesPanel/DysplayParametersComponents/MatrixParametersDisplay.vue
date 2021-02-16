<template>
  <UniversalDisplayComponent class="matrix-up-display"
                             :is-settings-button="false"
                             :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             @openDialog="$emit('openDialog')"/>
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
    title: {
      type: String,
      default: 'Матрица вверх'
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
}
</style>
