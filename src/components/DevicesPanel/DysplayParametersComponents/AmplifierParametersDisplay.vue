<template>
  <UniversalDisplayComponent :view-fields-list="viewFields" :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName">

  </UniversalDisplayComponent>
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
    },
    dialogName: {
      type: String,
      default: 'Amplifier',
    }
  },
}
</script>

<style scoped>

</style>
