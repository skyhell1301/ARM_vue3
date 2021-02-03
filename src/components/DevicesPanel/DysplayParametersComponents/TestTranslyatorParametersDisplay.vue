<template>
  <UniversalDisplayComponent :view-fields-list="viewFields" :title="title" :input-parameters="inputParameters" @openDialog="$emit('openDialog')"></UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'TestTranslyatorParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Частота (МГц)', 'Ослабление (дБ)', 'ВЧ выход']
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
    }
  },
}
</script>

<style scoped>

</style>
