<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName"
  ></UniversalDisplayComponent>
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
  props: {
    title: {
      type: String,
      default: 'КОНВЕРТЕР ВВЕРХ'
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'UpConverter',
    }
  },
}
</script>

<style scoped>

</style>
