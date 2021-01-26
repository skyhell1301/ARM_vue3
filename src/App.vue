<template>
  <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  <DialogsContainer ></DialogsContainer>
</template>

<script>
import store from './store'
import ContainerDeviceComponent from './components/Devices/ContainerDeviceComponent.vue'
import ContainerControlAndIndicationComponent from './components/ControlAndIndication/ContainerControlAndIndicationComponent.vue'
import NavMenuComponent from './components/Menu/NavMenuComponent.vue'
import DialogsContainer from "@/components/Dialogs/DialogsContainer";
import ConnectToWebSocket from "@/components/ConnectToWebSocket";
export default {
  name: 'App',
  data () {
    return {
      webSocketConnection: null
    }
  },
  components: {
    DialogsContainer,
    NavMenuComponent,
    ContainerControlAndIndicationComponent,
    ContainerDeviceComponent
  },

  methods: {
    connectToWS (wsUrl) {
      ConnectToWebSocket.methods.connectToWS(wsUrl, store)
    }
  },
  created() {

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
