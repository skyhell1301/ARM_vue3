<template>
  <UniversalDisplayComponent :view-fields-list="viewFields" :title="title" :input-parameters="inputParameters" @openDialog="$emit('openDialog')"></UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'AmplifierParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Режим', 'Вых. мощность (Вт)', 'Запрет несущей', 't °C(вх,вых Δ)'],
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
