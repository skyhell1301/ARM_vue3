<template>
  <DeviceDisplayComponent :title-device="title">
    <DisplayParametersComponent :device-data="parameters"></DisplayParametersComponent>
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";
import DisplayParametersComponent
  from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";
export default {
  name: 'TestTranslyatorParametersDisplay',
  components: {DisplayParametersComponent, DeviceDisplayComponent},
  data () {
    return {
      parameters: [],
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
  methods: {
    updateData () {
      this.parameters = []
      for(let field of this.viewFields){
        for (let param in this.inputParameters.deviceParameters) {
          if (this.inputParameters.deviceParameters[param].nameParameter === field) {
            this.parameters.push(this.inputParameters.deviceParameters[param])
          }
        }
      }
    }
  },
  watch: {
    inputParameters () {
      this.updateData()
    }
  }
}
</script>

<style scoped>

</style>
