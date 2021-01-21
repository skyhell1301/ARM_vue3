<template>
  <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
<!--  <AntennaSystemDialog v-if="antennaSystemDialogStatus"></AntennaSystemDialog>-->
  <AmplifierDialog v-if="amplifierDialogStatus"></AmplifierDialog>
  <AntennaSystemDialog style="position: absolute"></AntennaSystemDialog>
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
    this.webSocketConnection = new WebSocket('ws://10.10.0.16:8081')
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
  }
}
</script>

<style>
body {
  overflow: hidden;
  margin: 0;
  height: 100vh;
  width: 100vw;

}
#app {
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 4fr 9fr 2fr;
  grid-template-rows: 5% 90% 5%;
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 600px;
  border: 1px solid black;
  font-size: 1vmax;
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
</style>
