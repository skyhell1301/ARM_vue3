<template>
  <UniversalDisplayComponent :is-settings-button="false" :view-fields-list="viewFields" :title="title" :input-parameters="inputParameters" @openDialog="$emit('openDialog')"></UniversalDisplayComponent>
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
    }
  },
}
</script>

<style scoped>
</style>
