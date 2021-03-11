<template>
  <DeviceDisplayComponent :title-device="title" :settings-button="isSettingsButton" :is-footer="isFooter" @buttonClick="openSettingMenu">
    <DisplayParametersComponent :device-data="getViewParameters" @dblclick="openDialog">
      <div class="no-data__text" v-if="!isData">{{ $t('Interface.no_data') }}</div>
    </DisplayParametersComponent>
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
    <template v-slot:lamps>
      <slot/>
    </template>
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";
import DisplayParametersComponent
  from "@/components/DevicesPanel/ParametersDisplays/DisplayParametersComponent";
import ModalWindow from "@/components/WindowsControl/ModalWindow";
import CloseIcon from "@/assets/images/SVGIconComponents/CloseIcon";

export default {
  name: 'UniversalDisplayComponent',
  components: {CloseIcon, ModalWindow, DisplayParametersComponent, DeviceDisplayComponent},
  data() {
    return {
      parameters: [],
      localViewFields: [],
      showModal: false,
      isData: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    maxViewFields: {
      type: Number,
      default: 5
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
    },
    isFooter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openDialog() {
      this.$store.dispatch('dialogStatus/change' + this.dialogName + 'DialogStatus', true)
    },
    updateData() {
      this.parameters = []
      for (const param in this.inputParameters.deviceParameters) {

        let newParam = Object.assign({}, this.inputParameters.deviceParameters[param])
        newParam.deviceType = this.deviceType

        if (this.localViewFields === []) {
          newParam.isView = true
        } else {
          newParam.isView = false
          if(this.localViewFields.find(value => value === newParam.nameParameter)) {
            newParam.isView = true
          }
          // for (let i of this.localViewFields) {
          //   if (i === newParam.nameParameter) {
          //     newParam.isView = true
          //   }
          // }
        }
        this.parameters.push(newParam)
        newParam = null
      }
    },
    updateViewParametersList() {
      this.localViewFields = this.viewFieldsList
    },
    openSettingMenu() {
      this.showModal = true
    },
    changeViewList() {
      if (this.localViewFields.length > this.maxViewFields) {
        this.localViewFields.shift()
      }
      const parsed = JSON.stringify(this.localViewFields);
      localStorage.setItem(this.title.replace(/\s+/g, ''), parsed);
      this.updateData()
    }
  },
  mounted() {
    if (localStorage.getItem(this.title.replace(/\s+/g, ''))) {
      try {
        this.localViewFields = JSON.parse(localStorage.getItem(this.title.replace(/\s+/g, '')))
      } catch(e) {
        localStorage.removeItem(this.title.replace(/\s+/g, ''))
      }
    } else {
      this.updateViewParametersList()
    }
  },
  watch: {
    inputParameters() {
      this.isData = true
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
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 5px 0 rgba(78, 78, 78, 0.8);
}

.view-list-container {
  width: 100%;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: start;
  text-align: start;
  user-select: none;
}

.view-list-name {
  position: relative;
  left: 2%;
}

.view-list-value {
  justify-self: end;
  position: relative;
  right: 3%;
}

.close-modal-button {
  cursor: pointer;
  justify-self: end;
  width: 3%;
  margin-bottom: 20px;
}
.no-data__text {
  user-select: none;
  font-size: 2.5em;
  color: rgba(130, 130, 130, 0.4);
  width: 100%;
  align-self: center;
}
</style>
