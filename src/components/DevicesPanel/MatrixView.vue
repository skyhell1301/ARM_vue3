<template>
  <svg class="matrix-display">
    <rect class="verticalStep"
          width="2.5%" height="1.5%"
          x="0"
          v-for="item in verticalGridStep"
          :key="item"
          :y="item + '%'"
    />
    <rect class="horizontalStep"
          width="1%" height="3%"
          y="97%"
          v-for="item in horizontalGridStep"
          :key="item"
          :x="item + '%'"
    />
    <line class="line-path" v-for="line in getData" :key="line.id"
          :x1="line.x1 +'%'"
          :y1="line.y1 +'%'"
          :x2="line.x2 +'%'"
          :y2="line.y2 +'%'"
    />
  </svg>
</template>

<script>
export default {
  name: 'MatrixView',
  data () {
    return {
      lineList: [],
      outputList: [],
      sizeMatrix: null,
      horizontalGridStep: [],
      verticalGridStep: [],
    }
  },
  props: {
    inputParameters: {
      type: Object,
      default: null
    },
  },
  computed: {
    getData () {

      this.updateLineList()
      return this.lineList
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
      this.outputList = []
      for (let item in this.inputParameters) {
        this.outputList.push(this.inputParameters[item])
      }
      if (this.sizeMatrix !== this.outputList.length) {
        this.sizeMatrix = this.outputList.length
        this.updateStepGrid()
      }
      this.lineList = []

      for (let i = 0; i < this.outputList.length; i++) {
        if (this.outputList[i].valueParameter !== 0) {

          const verticalLine = {
            x1: this.horizontalGridStep[this.outputList[i].valueParameter - 1] + 0.5,
            y1: 100,
            x2: this.horizontalGridStep[this.outputList[i].valueParameter - 1] + 0.5,
            y2: this.verticalGridStep[i] + 0.7
          }
          this.lineList.push(verticalLine)

          const horizontalLine = {
            x1: verticalLine.x2,
            y1: verticalLine.y2,
            x2: 0,
            y2: verticalLine.y2
          }

          this.lineList.push(horizontalLine)
        }
      }
    }
  }
}
</script>

<style scoped>
.matrix-display {
  width: 100%;
  height: 100%;
}
.line-path {
  stroke: #285876;
  stroke-width: 2px;
  fill: none;
}
</style>