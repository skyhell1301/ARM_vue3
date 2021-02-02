<template>
  <DeviceDisplayComponent :title-device="title" :settings-button="isSettingsButton" @buttonClick="openSettingMenu">
    <DisplayParametersComponent :device-data="getViewParameters"></DisplayParametersComponent>
    <ModalWindow v-if="showModal" @close="showModal = false">
      <div v-for="param in parameters"
           :key="param.nameParameter"
           class="view-list-container"
      >
        <div class="view-list-name">{{param.nameParameter}}</div>
        <input class="view-list-value" type="checkbox" :value="param.nameParameter" v-model="localViewFields"/>
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
  name: 'UniversalDisplayComponent',
  components: {ModalWindow, DisplayParametersComponent, DeviceDisplayComponent},
  data () {
    return {
      parameters: [],
      localViewFields: [],
      showModal: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    inputParameters: {
      type: Object,
      default: null
    },
    viewFieldsList: {
      type: Array,
      default: null
    },
    isSettingsButton: {
      type: Boolean,
      default: true
    }

  },
  methods: {
    updateData () {
      this.parameters = []
      for (let param in this.inputParameters.deviceParameters) {

        let newParam = this.inputParameters.deviceParameters[param]

        if(this.viewFieldsList === null) {
          newParam.isView = true
        } else {
          newParam.isView = false
          for (let i of this.viewFieldsList) {
            if (i === newParam.nameParameter) {
              newParam.isView = true
            }
          }
        }
        this.parameters.push(newParam)
      }
    },
    updateViewParametersList () {
      for (let item in this.viewFieldsList) {
        this.localViewFields.push(this.viewFieldsList[item])
      }
    },
    openSettingMenu () {
      this.showModal = true
    }
  },
  updated() {

  },
  watch: {
    inputParameters () {
      this.updateData()
    },
    viewFieldsList () {
      this.updateViewParametersList()
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
.view-list-container {
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-items: start;
}
</style>
