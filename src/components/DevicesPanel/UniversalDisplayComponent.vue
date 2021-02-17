<template>
  <DeviceDisplayComponent :title-device="title" :settings-button="isSettingsButton" @buttonClick="openSettingMenu">
    <DisplayParametersComponent :device-data="getViewParameters" @dblclick="openDialog"></DisplayParametersComponent>
    <ModalWindow v-if="showModal">
      <div class="modal-content-wrapper">
        <close-icon class="close-modal-button" @click="showModal = false"></close-icon>
        <div class="view-list_wrapper">
          <div v-for="param in parameters"
               :key="param"
               class="view-list-container"
          >
            <div class="view-list-name">{{ $t('DevicesParameters.' + param.deviceType + '.' + param.nameParameter) }}
            </div>
            <input class="view-list-value" type="checkbox" :value="param.nameParameter" v-model="localViewFields"
                   @change="changeViewList"/>
          </div>
        </div>
      </div>
    </ModalWindow>
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";
import DisplayParametersComponent
  from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";
import ModalWindow from "@/components/WindowsControl/ModalWindow";
import CloseIcon from "@/assets/images/SVGIconComponents/CloseIcon";

export default {
  name: 'UniversalDisplayComponent',
  components: {CloseIcon, ModalWindow, DisplayParametersComponent, DeviceDisplayComponent},
  data() {
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
    deviceType: {
      type: String,
      default: ''
    },
    isSettingsButton: {
      type: Boolean,
      default: true
    },
    dialogName: {
      type: String,
      default: '',
    }
  },
  methods: {
    openDialog() {
      this.$store.dispatch('dialogStatus/change' + this.dialogName + 'DialogStatus', true)
    },
    updateData() {
      // let namesList = []
      // this.updateNamesList()
      // for (let name in this.deviceData) {
      //   namesList.push({nameParameter: name, valueParameter: this.deviceData[name].valueParameter})
      // }
      this.parameters = []
      for (let param in this.inputParameters.deviceParameters) {

        let newParam = this.inputParameters.deviceParameters[param]
        newParam.nameParameter = param
        newParam.deviceType = this.deviceType

        if (this.localViewFields === null) {
          newParam.isView = true
        } else {
          newParam.isView = false
          for (let i of this.localViewFields) {
            if (i === newParam.nameParameter) {
              newParam.isView = true
            }
          }
        }
        this.parameters.push(newParam)
      }
    },
    updateViewParametersList() {
      for (let item in this.viewFieldsList) {
        this.localViewFields.push(this.viewFieldsList[item])
      }
    },
    openSettingMenu() {
      this.showModal = true
    },
    changeViewList() {
      if (this.localViewFields.length > 5) {
        this.localViewFields.shift()
      }
      this.updateData()
    }
  },
  mounted() {
    this.updateViewParametersList()
  },
  watch: {
    inputParameters() {
      this.updateData()
    },
    viewFieldsList() {
      this.updateViewParametersList()
    }
  },
  computed: {
    getViewParameters() {
      let filterParameters = []
      for (let item of this.parameters) {
        if (item.isView) {
          filterParameters.push(item)
        }
      }
      return filterParameters
    }
  }
}
</script>

<style scoped>
.modal-content-wrapper {
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  display: grid;
  grid-row-gap: 5px;
}
.view-list_wrapper {
  height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.view-list-container {

  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: start;
  user-select: none;
}

.view-list-value {
  justify-self: end;
}

.close-modal-button {
  cursor: pointer;
  justify-self: end;
  width: 3%;
  margin-bottom: 20px;
}


</style>
