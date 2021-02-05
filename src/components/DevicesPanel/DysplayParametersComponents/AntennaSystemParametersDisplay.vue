<template>
  <UniversalDisplayComponent :view-fields-list="viewFields"
                             :title="title"
                             :input-parameters="inputParameters"
                             :dialog-name="dialogName">

  </UniversalDisplayComponent>
</template>

<script>
import UniversalDisplayComponent from "@/components/DevicesPanel/UniversalDisplayComponent";
export default {
  name: 'AntennaSystemParametersDisplay',
  components: {UniversalDisplayComponent},
  data () {
    return {
      viewFields: ['Угол места', 'Азимут', 'Сканнер', 'Уровень сигнала', 'Рабочий режим'],
    }
  },
  props: {
    title: {
      type: String,
      default: 'АНТЕННАЯ СИСТЕМА'
    },
    inputParameters: {
      type: Object,
      default: null
    },
    dialogName: {
      type: String,
      default: 'AntennaSystem',
    }
  },
}
</script>

<style scoped>

</style>
