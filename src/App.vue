<template>
  <div class="menu-container">
    <NavMenuComponent class="container-nav-menu"></NavMenuComponent>
  </div>
  <ContainerDeviceComponent class="container-device"></ContainerDeviceComponent>
  <ContainerControlAndIndicationComponent
      class="container-control-and-indication"></ContainerControlAndIndicationComponent>
  <WindowsPanelComponent class="container-window-panel"></WindowsPanelComponent>
  <DialogsContainer></DialogsContainer>
  <div>
<!--    <p>{{ $tc('azimuth') }}</p>-->
<!--    <p>{{ $tc('car', 2) }}</p>-->
<!--    <p>{{ $tc('car', 4) }}</p>-->
<!--    <p>{{ $tc('car', 12) }}</p>-->
<!--    <p>{{ $tc('car', 41) }}</p>-->
  </div>
</template>

<script>
import store from './store'
import ContainerDeviceComponent from './components/DevicesPanel/ContainerDeviceComponent.vue'
import ContainerControlAndIndicationComponent
  from './components/ControlAndIndicationPanel/ContainerControlAndIndicationComponent.vue'
import NavMenuComponent from './components/MenuPanel/NavMenuComponent.vue'
import DialogsContainer from "@/components/Dialogs/DialogsContainer";
import WindowsPanelComponent from "@/components/WindowsControl/WindowsPanel";
import connectToWebSocket from "@/mixins/connectToWebSocket";

export default {
  name: 'App',
  data() {
    return {
      ARMConfig: null,
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
    async someMethod() {
      const baseUrl = process.env.BASE_URL;
      let response = await fetch(baseUrl + 'ARMConfiguration.json')
      this.ARMConfig = await response.json()
      this.connectToARM()
    },
    connectToARM() {
      if (this.ARMConfig) {
        // let address1 = {}
        // address1.ip = this.ARM1.ip
        // address1.port = this.ARM1.port
        // address1.url = '/state'
        // address1.full = address1.ip + ':' + address1.port + address1.url
        // address1.isMain = true
        // this.connectToWS(address1, 'ARM1', store)

        // let address2 = {}
        // address2.ip = this.ARM1.ip
        // address2.port = this.ARM1.port
        // address2.url = '/protocol'
        // address2.full = address2.ip + ':' + address2.port + address2.url
        // address2.isMain = false
        // this.connectToWS(address2, 'Protocol', store)

        let address3 = {}
        address3.ip = '10.10.0.16'
        address3.port = 8081
        address3.url = '/'
        address3.full = address3.ip + ':' + address3.port + address3.url
        address3.isMain = true
        this.connectToWS(address3, 'ARM2', store)
      } else {
        setTimeout(this.connectToARM, 2000)
      }

    }
  },
  mounted() {
    this.someMethod()

    // let a = "^((0|1\\d?\\d?|2[0-4]?\\d?|25[0-5]?|[3-9]\\d?)\\.){3}(0|1\\d?\\d?|2[0-4]?\\d?|25[0-5]?|[3-9]\\d?)$"
    // let PATTERN = new RegExp(a)
    // let str = "10.10.0.250";
    // let result = PATTERN.test(str);
    // console.log(result)

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
  font-family: Sans-Serif;
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
  /*font-size: 1.7vmin;*/
}

.menu-container {
  box-shadow: 0 0 5px .5px rgba(172, 172, 172, 0.8);
  display: grid;
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  z-index: 2;
  width: 100%;
  height: 90%;

}

.container-nav-menu {
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
