<template>
  <UniversalDisplayComponent :view-fields-list="viewFields" :title="title" :input-parameters="inputParameters" @openDialog="$emit('openDialog')"></UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'UpConverterParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Значение ослабления', 'Вх. частота', 'Напряжение +5В', 'dac'],
    }
  },

  updated() {
    // console.log(this.inputParameters)
  },
  props: {
    title: {
      type: String,
      default: 'КОНВЕРТЕР ВВЕРХ'
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
