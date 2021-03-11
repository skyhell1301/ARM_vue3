<template>
  <DeviceDisplayComponent :title-device="$t('DevicesParameters.Matrix' + titleId + '.titleUI')"
                          class="matrix-up-display"
                          @dblclick="openDialog"
  >
    <div class="no-data__text" v-if="inputParameters === null">
      <div>{{ $t('Interface.no_data') }}</div>
    </div>
    <MatrixView style="height: 100%" v-else :input-parameters="inputParameters.deviceParameters"
    />
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";
import MatrixView from "@/components/DevicesPanel/MatrixView";

export default {
  name: 'MatrixParametersDisplay',
  components: {MatrixView, DeviceDisplayComponent},
  data() {
    return {
      isData: false,
    }
  },
  props: {
    deviceId: {
      type: Number,
      default: 0
    },
    inputParameters: {
      type: Object,
      default: null
    },
    titleId: {
      type: String,
      default: 'Up'
    },
    dialogName: {
      type: String,
    }
  },
  methods: {
    openDialog () {
      this.$store.dispatch('dialogStatus/change' + this.dialogName + 'DialogStatus', true)
    },
  }
}
</script>

<style scoped>
.matrix-up-display {
  font-size: .8em;
}



.no-data__text {
  user-select: none;
  font-size: 1.5em;
  color: rgba(130, 130, 130, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
