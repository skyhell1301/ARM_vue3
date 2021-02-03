<template>
  <UniversalDisplayComponent :view-fields-list="viewFields" :title="title" :input-parameters="inputParameters" @openDialog="$emit('openDialog')"></UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'DownConverterParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Значение ослабления', 'Вх. частота', 'Напряжение +5В', 'dac'],
    }
  },
  props: {
    title: {
      type: String,
      default: 'КОНВЕРТЕР ВНИЗ'
    },
    inputParameters: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
