<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
                             @openDialog="$emit('openDialog')">

  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'TestTranslyatorParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: []
    }
  },
  props: {
    title: {
      type: String,
      default: 'УСИЛИТЕЛЬ МОЩНОСТИ'
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'TestTranslyator',
    }
  },
}
</script>

<style scoped>

</style>
