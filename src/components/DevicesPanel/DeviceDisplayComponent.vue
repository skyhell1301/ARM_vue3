<template>
  <div class="wrapper_device-display-component" :class="{'connection-interface-active': !connectionInterfaceActive}">
    <div v-if="connectionInterfaceActive" class="connection_interface">
      <svg class="connection_interface__svg" viewBox="0 0 500 40" preserveAspectRatio="none">
        <linearGradient id="my-cool-gradient" x1="0%" y1="57%" x2="81%" y2="0%">
          <stop offset="0%" style="stop-color:rgb(55, 51, 51);stop-opacity:1;" />
          <stop offset="100%" style="stop-color:rgb(111, 111, 111);stop-opacity:1;" />
        </linearGradient>
        <path class="connection_interface__path" d="M 0 40 C 20 0 20 0 40 0 L 460 0 C 480 0 480 0 500 40 L 0 40 Z"></path>
      </svg>
    </div>
    <div class="device_body">
      <div class="device-body-header">
        <div class="title-device-background">
          <div class="title_device">
            {{titleDevice}}
          </div>
        </div>
        <GearIcon @click="clickSettingButton" v-if="settingsButton" class="device-btn-setting"/>
      </div>
      <div class="device_display">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

import GearIcon from "@/assets/images/SVGIconComponents/GearIcon";
export default {
  name: 'DeviceDisplayComponent',
  components: {GearIcon},
  data () {
    return {
      fz: this.fontSizeTitle,
      resizeCoefficient: ''
    }
  },
  props: {
    titleDevice: {
      type: String,
      default: 'TITLE'
    },
    connectionInterfaceActive: {
      type: Boolean,
      default: false
    },
    fontSizeTitle: {
      type: Number,
      default: 12
    },
    isReFontSize: {
      type: Boolean,
      default: true
    },
    settingsButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickSettingButton () {
      this.$emit('buttonClick')
    }

  },
}
</script>

<style scoped>
.wrapper_device-display-component {
  display: grid;
  grid-template-rows: 5% 95%;
}
.wrapper_device-display-component.connection-interface-active {
  grid-template-rows: 100%;
}
.connection_interface {
  position: relative;
  width: 85%;
  height: 100%;
  align-self: center;
  justify-self: center;
}

.connection_interface__svg {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.connection_interface__path {
  fill: url(#my-cool-gradient);
}
.device_body {
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 13% 87%;
  background: #d9d9d9;
  border-radius: 2px;
  /*background: linear-gradient(135deg, rgba(235,235,235,1) 0%, rgba(128,128,128,1) 61%, rgba(166,166,166,1) 100%);*/
  box-shadow: 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
}

.device-body-header {
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 1;
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  justify-items: center;
}

.title-device-background {
  height: 80%;
  width: 80%;
  /*padding: 0 10px;*/
  display: inline-block;
  align-self: center;
  justify-self: center;
  position: relative;
  left: 6%;
  display: grid;
  /*border: 0.05rem solid rgba(77,83,79,0.75);*/
  box-shadow: inset 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
  border-radius: 7px;
  background: rgb(246, 251, 255);
  /*background: linear-gradient(to right, rgba(229,249,255,1) 0%, rgba(255,255,255,0.98) 47%, rgba(255,255,255,0.98) 62%, rgba(229,249,255,0.96) 100%);*/
}
.title_device {
  grid-row: 1;
  grid-column: 1;
  align-self: center;
  justify-self: center;
  white-space: nowrap;
  font-weight: bold;
  font-stretch: semi-condensed;
  user-select: none;
  font-size: .55em;
  display: grid;
  grid-template-columns: 90% 10%;
}
.device-btn-setting {
  stroke-width: 3px;
  stroke: rgba(130, 130, 130, 0.8);
  width: 60%;
  height: 60%;
  fill: none;
}

.device-btn-setting:hover {
  cursor: pointer;
  fill: #ffffff;
}
.device_display {
  grid-row: 2;
  width: 95%;
  height: 97%;
  justify-self: center;
  /*background: linear-gradient(275deg, rgb(158, 158, 158) 0%, rgb(247, 247, 247) 100%);*/
  background: linear-gradient(135deg, #dcdcdc 0%, #eaeaea 100%);
  background: #e8e8e8;
  box-shadow: inset 0px 0px 3px 1px rgba(130, 130, 130, 0.8);
}



</style>
