<template>
  <div class="amplifier-device-container">
    <div>УМ 1</div>
    <display-parameters-component style="font-size: 1em;" :device-data="amplifier1Device1.deviceParameters">
    </display-parameters-component>
    <div style="margin-top: 10px;">УМ 2</div>
    <display-parameters-component style="font-size: 1em;" :device-data="amplifier1Device2.deviceParameters"/>
  </div>
</template>

<script>
import DisplayParametersComponent from "@/components/DevicesPanel/ParametersDisplays/DisplayParametersComponent";

export default {
  name: 'AmplifierDialog',
  data() {
    return {}
  },
  components: {
    DisplayParametersComponent,
  },
  computed: {
    amplifier1Device1 () {
      return this.$store.getters['devicesParameters/amplifierParameters1']
    },
    amplifier1Device2 () {
      return this.$store.getters['devicesParameters/amplifierParameters2']
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.amplifier-device-container {
  display: grid;
  overflow-y: auto;
  height: 100%;
  width: 100%;
}
</style>
