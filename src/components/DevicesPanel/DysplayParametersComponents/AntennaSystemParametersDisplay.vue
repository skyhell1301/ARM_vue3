<template>
  <DeviceDisplayComponent :title-device="title" :settings-button="isSettingsButton" @buttonClick="openSettingMenu">
    <DisplayParametersComponent :device-data="getViewParameters"></DisplayParametersComponent>
    <ModalWindow v-if="showModal" @close="showModal = false">
      <div v-for="param in parameters"
           :key="param.nameParameter"
      >
        <div>{{param.nameParameter}}</div>
        <input type="checkbox" :value="param.nameParameter" v-model="viewFields" @change="noFieldView"/>
      </div>
    </ModalWindow>
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";
import DisplayParametersComponent
  from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";
import ModalWindow from "@/components/WindowsControl/ModalWindow";
export default {
  name: 'AntennaSystemParametersDisplay',
  components: {ModalWindow, DisplayParametersComponent, DeviceDisplayComponent},
  data () {
    return {
      parameters: [],
      viewFields: ['Угол места', 'Азимут', 'Сканнер', 'Уровень сигнала', 'Рабочий режим'],
      isSettingsButton: true,
      showModal: false
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
    }
  },
  methods: {
    updateData () {
      this.parameters = []
      for (let param in this.inputParameters.deviceParameters) {
        let newParam = this.inputParameters.deviceParameters[param]
        newParam.isView = false
        for (let i of this.viewFields) {
          if (i === newParam.nameParameter) {
            newParam.isView = true
          }
        }
        this.parameters.push(newParam)
      }
    },
    noFieldView () {
      console.log(this.viewFields)
      // this.viewFields.splice(this.parameters.indexOf(field), 1)
    },
    openSettingMenu () {
      this.showModal = true
    }
  },
  watch: {
    inputParameters () {
      this.updateData()
    }
  },
  computed: {
    getViewParameters () {
      let filterParametrs = []
      for(let item in this.parameters) {
        if(this.parameters[item].isView) {
          filterParametrs.push(this.parameters[item])
        }
      }
      return filterParametrs
    }
  }
}
</script>

<style scoped>

</style>
