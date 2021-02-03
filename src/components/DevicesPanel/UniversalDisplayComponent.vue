<template>
  <DeviceDisplayComponent :title-device="title" :settings-button="isSettingsButton" @buttonClick="openSettingMenu">
    <DisplayParametersComponent :device-data="getViewParameters" @dblclick="$emit('openDialog')"></DisplayParametersComponent>
    <ModalWindow v-if="showModal">
      <div class="modal-content-wrapper">
        <close-icon class="close-modal-button" @click="showModal = false"></close-icon>
        <div v-for="param in parameters"
             :key="param.valueParameter"
             class="view-list-container"
        >
          <div class="view-list-name">{{param.nameParameter}}</div>
          <input class="view-list-value" type="checkbox" :value="param.nameParameter" v-model="localViewFields" @change="changeViewList"/>
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

        if(this.localViewFields === null) {
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
    updateViewParametersList () {
      for (let item in this.viewFieldsList) {
        this.localViewFields.push(this.viewFieldsList[item])
      }
    },
    openSettingMenu () {
      this.showModal = true
    },
    changeViewList () {
      if (this.localViewFields.length > 6) {
        this.localViewFields.shift()
      }
      this.updateData()
    }
  },
  mounted() {
    this.updateViewParametersList()
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
.modal-content-wrapper {
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  display: grid;
  grid-row-gap: 5px;
  //justify-items: end;
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
