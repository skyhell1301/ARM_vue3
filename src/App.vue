<template id="kek">
  <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  <AntennaSystemDialog v-if="antennaSystemDialogStatus"></AntennaSystemDialog>
  <AmplifierDialog v-if="amplifierDialogStatus"></AmplifierDialog>
</template>
<script>
import {mapState} from 'vuex'
import store from './store'
import ContainerDeviceComponent from './components/Devices/ContainerDeviceComponent.vue'
import ContainerControlAndIndicationComponent from './components/ControlAndIndication/ContainerControlAndIndicationComponent.vue'
import NavMenuComponent from './components/Menu/NavMenuComponent.vue'
import AntennaSystemDialog from "@/components/SettingsDialogs/AntennaSystemDialog";
import AmplifierDialog from "@/components/SettingsDialogs/AmplifierDialog";
export default {
  name: 'App',
  data () {
    return {
      webSocketConnection: null
    }
  },
  components: {
    AmplifierDialog,
    AntennaSystemDialog,
    NavMenuComponent,
    ContainerControlAndIndicationComponent,
    ContainerDeviceComponent
  },
  computed: {
    ...mapState({
      antennaSystemDialogStatus: state => state.dialogStatus.antennaSystemDialogStatus,
      amplifierDialogStatus: state => state.dialogStatus.amplifierDialogStatus
    })
  },
  methods: {
    sendMessage: function (message) {
      console.log(this.webSocketConnection)
      this.webSocketConnection.send(message)
    }
  },
  created() {
    // Create a new WebSocket.
    console.log('Starting Connection to WebSocket Server')
    this.webSocketConnection = new WebSocket('ws://10.10.0.16:8080')
    this.webSocketConnection.onopen = function (event) {
      console.log(event)
      console.log('Successfully connected to WebSocket Server')
    }

    this.webSocketConnection.onmessage = function (event) {
      let parameters = JSON.parse(event.data).DeviceParameters
      if (parameters !== null && parameters !== undefined) {
        store.dispatch('ZSParameters/parametersUpdate', parameters)
      }
    }
      // connectionWebSocket.onmessage = function (e) {
      //   let text = JSON.parse(e.data)
      //   if (text.DeviceParameters !== null && text.DeviceParameters !== undefined) {
      //     context.inputValue = text.DeviceParameters
      //     if (context.inputValue.antennaDeviceData !== null && context.inputValue.antennaDeviceData !== undefined) {
      //       context.antennaDeviceData = context.inputValue.antennaDeviceData
      //     }
      //     if (context.inputValue.testTranslyatorDeviceData !== null && context.inputValue.testTranslyatorDeviceData !== undefined) {
      //       context.testTranslyatorDeviceData = context.inputValue.testTranslyatorDeviceData
      //     }
      //     if (context.inputValue.amplifier1DeviceData1 !== null && context.inputValue.amplifier1DeviceData1 !== undefined) {
      //       context.amplifier1DeviceData1 = context.inputValue.amplifier1DeviceData1
      //     }
      //     if (context.inputValue.amplifier1DeviceData2 !== null && context.inputValue.amplifier1DeviceData2 !== undefined) {
      //       context.amplifier1DeviceData2 = context.inputValue.amplifier1DeviceData2
      //     }
      //     if (context.inputValue.MSHUDeviceData1 !== null && context.inputValue.MSHUDeviceData1 !== undefined) {
      //       context.MSHUDeviceData1 = context.inputValue.MSHUDeviceData1
      //     }
      //     if (context.inputValue.MSHUDeviceData2 !== null && context.inputValue.MSHUDeviceData2 !== undefined) {
      //       context.MSHUDeviceData2 = context.inputValue.MSHUDeviceData2
      //     }
      //     if (context.inputValue.upConverterDeviceData1 !== null && context.inputValue.upConverterDeviceData1 !== undefined) {
      //       context.upConverterDeviceData1 = context.inputValue.upConverterDeviceData1
      //     }
      //     if (context.inputValue.upConverterDeviceData2 !== null && context.inputValue.upConverterDeviceData2 !== undefined) {
      //       context.upConverterDeviceData2 = context.inputValue.upConverterDeviceData2
      //     }
      //     if (context.inputValue.downConverterDeviceData1 !== null && context.inputValue.downConverterDeviceData1 !== undefined) {
      //       context.downConverterDeviceData1 = context.inputValue.downConverterDeviceData1
      //     }
      //     if (context.inputValue.downConverterDeviceData2 !== null && context.inputValue.downConverterDeviceData2 !== undefined) {
      //       context.downConverterDeviceData2 = context.inputValue.downConverterDeviceData2
      //     }
      //   }
      //   this.inputValue = JSON.parse(e.data)
  }
}
</script>

<style>
body {
  overflow: hidden;
  margin: 0;
  font-size: 1vmax;
  display: grid;
  height: 100vh;
  width: 100vw;
  min-width: 800px;
  min-height: 600px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 4fr 9fr 2fr;
  grid-template-rows: 5% 90% 5%;
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

.container-device {
  grid-column: 2;
  grid-row: 2;
  z-index: 1;
}

.container-control-and-indication {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column: 3;
  z-index: 1;
}

.container-nav-menu {
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  z-index: 2;
}
@media (max-width: 800px) {
  body {
    overflow: visible;
  }
}
@media (max-height: 600px) {
  body {
    overflow: visible;
  }
}
</style>
