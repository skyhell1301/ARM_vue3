<template>
  <DeviceDisplayComponent :title-device="$t('DevicesParameters.Matrix' + titleId + '.titleUI')"
                          class="matrix-up-display"
  >
    <div class="no-data__text" v-if="!isData">
      <div>{{ $t('Interface.no_data') }}</div>
    </div>
    <svg v-else class="matrix-display">
      <rect class="verticalStep"
            width="3" height="2"
            x="0"
            v-for="item in verticalGridStep"
            :key="item"
            :y="item + '%'"
      />
      <rect class="horizontalStep"
            width="2" height="3"
            y="97%"
            v-for="item in horizontalGridStep"
            :key="item"
            :x="item + '%'"
      />
      <line class="line-path" v-for="line in lineList" :key="line.id"
            :x1="line.x1 +'%'"
            :y1="line.y1 +'%'"
            :x2="line.x2 +'%'"
            :y2="line.y2 +'%'"
      />
    </svg>
  </DeviceDisplayComponent>
</template>

<script>
import DeviceDisplayComponent from "@/components/DevicesPanel/DeviceDisplayComponent";

export default {
  name: 'MatrixParametersDisplay',
  components: {DeviceDisplayComponent},
  data() {
    return {
      isData: false,
      lineList: [],
      outputList: [],
      sizeMatrix: null,
      horizontalGridStep: [],
      verticalGridStep: [],
      localParameters: {}
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
    }
  },
  watch: {
    inputParameters() {
      this.isData = true
      this.outputList = []

      for (let item in this.inputParameters.deviceParameters) {
        this.outputList.push(this.inputParameters.deviceParameters[item])
      }
      if (this.sizeMatrix !== this.outputList.length) {
        this.sizeMatrix = this.outputList.length
        this.updateStepGrid()
      }
      this.updateLineList()
    }
  },
  methods: {
    updateStepGrid() {
      this.horizontalGridStep = []
      let step = 100 / this.sizeMatrix
      for (let i = 0; i < this.sizeMatrix; i++) {
        this.horizontalGridStep.push(5 + (i * step))
      }
      this.verticalGridStep = [...this.horizontalGridStep]
      this.verticalGridStep.reverse()
    },
    updateLineList() {
      this.lineList = []

      for (let i = 0; i < this.outputList.length; i++) {
        if (this.outputList[i].valueParameter !== 0) {

          const verticLine = {
            x1: this.horizontalGridStep[this.outputList[i].valueParameter - 1] + 0.5,
            y1: 100,
            x2: this.horizontalGridStep[this.outputList[i].valueParameter - 1] + 0.5,
            y2: this.verticalGridStep[i]
          }
          this.lineList.push(verticLine)

          const horizontalLine = {
            x1: verticLine.x2,
            y1: verticLine.y2 + 0.5,
            x2: 0,
            y2: verticLine.y2 + 0.5
          }

          this.lineList.push(horizontalLine)
        }


      }
    }
  }
}
</script>

<style scoped>
.matrix-up-display {
  font-size: .8em;
}

.matrix-display {
  width: 100%;
  height: 100%;
}

.line-path {
  stroke: #285876;
  stroke-width: 2px;
  fill: none;
}
.no-data__text {
  font-size: 1.5em;
  color: rgba(130, 130, 130, 0.4);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
