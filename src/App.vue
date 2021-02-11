<template>
  <div class="menu-container">
    <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  </div>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  <WindowsPanelComponent class="container-window-panel"></WindowsPanelComponent>
  <DialogsContainer></DialogsContainer>
</template>

<script>
import store from './store'
import ContainerDeviceComponent from './components/DevicesPanel/ContainerDeviceComponent.vue'
import ContainerControlAndIndicationComponent from './components/ControlAndIndicationPanel/ContainerControlAndIndicationComponent.vue'
import NavMenuComponent from './components/MenuPanel/NavMenuComponent.vue'
import DialogsContainer from "@/components/Dialogs/DialogsContainer";
import WindowsPanelComponent from "@/components/WindowsControl/WindowsPanel";
import connectToWebSocket from "@/mixins/connectToWebSocket";
export default {
  name: 'App',
  data () {
    return {
      mode: process.env.NODE_ENV
    }
  },
  mixins: [connectToWebSocket],
  components: {
    WindowsPanelComponent,
    DialogsContainer,
    NavMenuComponent,
    ContainerControlAndIndicationComponent,
    ContainerDeviceComponent
  },
  methods: {
  },
  mounted() {
    this.connectToWS({full: process.env.VUE_APP_BASE_URL}, 'ARM1', store)
    this.connectToWS({full: '10.10.0.122:8083/protocol'}, 'Protocol', store)
  }
}
</script>

<style>
@import "./assets/css/colors.css";
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

.menu-container {
  box-shadow: 0px 0px 5px .5px rgba(172, 172, 172, 0.8);
  display: grid;
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  z-index: 2;
  width: 100%;
  height: 90%;

}
.container-nav-menu {
  width: 60%;
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

.container-window-panel {
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
