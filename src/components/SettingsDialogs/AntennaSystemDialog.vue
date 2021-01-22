<template>
  <input type="checkbox" v-model="rotateVar">
  <button :class="{'arrows-rotate' : rotateVar}" @click="testMethod">Кручусь</button>
<!--    <DisplayParametersComponent style="display: none" :device-data="antennaParameter"></DisplayParametersComponent>-->
<!--    <div style="height: 300px; width: 300px">-->
<!--  <ButtonComponent style="width: 100px; height: 100px; z-index: 20" @btnClick="testMethod"></ButtonComponent>-->
<!--      <StatusIndicatorComponent :is-active="rotateVar" style="width: 100px; height: 100px;"></StatusIndicatorComponent>-->
<!--    </div>-->

</template>

<script>
import {mapState} from 'vuex'
// import ButtonComponent from "@/components/ControlAndIndication/ButtonComponent";
// import StatusIndicatorComponent from "@/components/ControlAndIndication/StatusIndicatorComponent";
// import DisplayParametersComponent from "@/components/Devices/DisplayParametersComponent";
export default {
  name: 'AntennaSystemDialog',
  data () {
    return {
      rotateVar: false,
    }
  },
  components: {
    // DisplayParametersComponent,
    // StatusIndicatorComponent,
    // ButtonComponent
    },
  methods: {

    testMethod () {
      // console.log('test')
      this.rotateVar=!this.rotateVar

      // this.$store.dispatch('dialogStatus/changeAmplifierDialogStatus', !this.$store.state.dialogStatus.amplifierDialogStatus)
    }
  },
  mounted() {
  },
  computed: {

    ...mapState({

      antennaParameter: state => state.ZSParameters.antennaParametersById1
    })
  },
  beforeUnmount() {
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

.arrows-rotate {
  animation:spin 4s linear infinite;
}
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
