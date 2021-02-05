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
      viewFields: ['Значение тока (мА)', 'Пределы тока (мА)', 'Напряжение A (В)', 'Напряжение B (В)']
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
