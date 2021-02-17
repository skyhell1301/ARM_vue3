<template>
  <div class="amplifier-device-container">
    <display-parameters-component style="font-size: 1.5em;" :device-data="amplifier1DeviceById1">
    </display-parameters-component>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import DisplayParametersComponent from "@/components/DevicesPanel/DysplayParametersComponents/DisplayParametersComponent";

export default {
  name: 'AmplifierDialog',
  data() {
    return {}
  },
  components: {
    DisplayParametersComponent,
  },
  computed: {
    ...mapState({
      amplifier1DeviceById1: state => state.devicesParameters.amplifier1DeviceParameters1.deviceParameters
    })
  },
  mounted() {
  }
}
</script>

<style scoped>


</style>
