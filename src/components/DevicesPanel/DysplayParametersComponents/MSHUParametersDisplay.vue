<template>
  <UniversalDisplayComponent view-fields-list="viewFields" :title="title" :input-parameters="inputParameters"></UniversalDisplayComponent>
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
  methods: {

  },
  watch: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style scoped>
.view-list-container {
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-items: start;
}
</style>
