<template>
  <window-portal class="test" :open="antennaSystemDialogStatus" @close="closeDialog">
<!--    <DisplayParametersComponent style="display: none" :device-data="antennaParameter"></DisplayParametersComponent>-->
    <div style="height: 300px">
      <ButtonComponent style="width: 100px; height: 100px; z-index: 20" @btnClick="testMethod"></ButtonComponent>
      <button @click="testMethod">Click</button>
      <StatusIndicatorComponent :is-active="rotateVar" style="width: 100px; height: 100px;"></StatusIndicatorComponent>
    </div>
  </window-portal>
</template>

<script>
import {mapState} from 'vuex'
import WindowPortal from "@/components/windowPortal";
import ButtonComponent from "@/components/ControlAndIndication/ButtonComponent";
import StatusIndicatorComponent from "@/components/ControlAndIndication/StatusIndicatorComponent";
// import DisplayParametersComponent from "@/components/Devices/DisplayParametersComponent";
export default {
  name: 'AntennaSystemDialog',
  data () {
    return {
      rotateVar: false
    }
  },
  components: {
    // DisplayParametersComponent,
    StatusIndicatorComponent, ButtonComponent, WindowPortal},
  methods: {
    closeDialog () {
      this.$store.dispatch('dialogStatus/changeAntennaSystemDialogStatus', !this.$store.state.dialogStatus.antennaSystemDialogStatus)
    },
    testMethod () {
      this.rotateVar=!this.rotateVar
      console.log(this.rotateVar)
    }
  },
  computed: {
    ...mapState({
      antennaSystemDialogStatus: state => state.dialogStatus.antennaSystemDialogStatus,
      antennaParameter: state => state.ZSParameters.antennaParametersById1
    })
  }
}
</script>

<style scoped>
.test {
  display: grid;
  grid-template-rows: 10% 90%;
  width: 100%;
  height: 100%;
}
</style>
