<template id="kek">
  <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  <AntennaSystemDialog v-if="this.$store.state.test.antennaSystemStatus"></AntennaSystemDialog>
</template>
<script>
import ContainerDeviceComponent from './components/Devices/ContainerDeviceComponent.vue'
import ContainerControlAndIndicationComponent from './components/ControlAndIndication/ContainerControlAndIndicationComponent.vue'
import NavMenuComponent from './components/Menu/NavMenuComponent.vue'
import AntennaSystemDialog from "@/components/SettingsDialogs/AntennaSystemDialog";
export default {
  name: 'App',
  components: {
    AntennaSystemDialog,
    NavMenuComponent,
    ContainerControlAndIndicationComponent,
    ContainerDeviceComponent
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
