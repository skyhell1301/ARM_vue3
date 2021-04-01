<template>
  <g class="connect-line-component" id="connect-line-component-id">
    <path :d="pathForLine" class="path-line" :class="{'active-connect-line': isActive}"/>
  </g>
</template>

<script>
export default {
  name: 'ConnectionLineComponent',
  data () {
    return {
      ID: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      x1: '',
      x2: '',
      variableX: '',
      variableY: '',
      y1: '',
      y2: '',
      widthCoefficient: '',
      heightCoefficient: '',
      deltaX: '',
      deltaY: '',
      object_1: '',
      object_2: '',
      widthSVG: '',
      heightSVG: '',
      xSvg: '',
      ySvg: '',
      coordinateArray: [],
      pathForLine: ''
    }
  },
  props: {
    id_1: {
      type: String
    },
    id_2: {
      type: String
    },
    repeatActive: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    },
    // (точка соединения объекта) connectionPoint = {side: 'left', percent: 50}
    // side - сторона (left, top, right, bottom)
    // percent - процент от длины стороны
    // Пример: {side: 'left', percent: 50} - левая сторона объекта, 50% от высоты объекта
    connectionPoint_1: {
      type: Object,
      default: function () {
        return {side: 'bottom', percent: 50}
      }
    },
    connectionPoint_2: {
      type: Object,
      default: function () {
        return {side: 'top', percent: 50}
      }
    },
    pointEdgesArray: {
      type: Array
    },
  },
  methods: {
    updateLine: function () {
      let coordinate1 = this.calculateCoordinates(this.object_1, this.connectionPoint_1)
      let coordinate2 = this.calculateCoordinates(this.object_2, this.connectionPoint_2)
      // console.log(this.$el.parentNode)
      this.xSvg = this.$el.parentNode.getBoundingClientRect().x
      this.ySvg = this.$el.parentNode.getBoundingClientRect().y
      this.widthSVG = this.$el.parentNode.getBoundingClientRect().width
      this.heightSVG = this.$el.parentNode.getBoundingClientRect().height
      this.x1 = coordinate1.x - this.xSvg
      this.y1 = coordinate1.y - this.ySvg
      this.x2 = coordinate2.x - this.xSvg
      this.y2 = coordinate2.y - this.ySvg
      this.updateDeltaFlag()
      this.createPathLine()
    },
    calculateCoordinates (obj, point) {
      let x = obj.getBoundingClientRect().x
      let y = obj.getBoundingClientRect().y
      let widthObj = obj.getBoundingClientRect().width
      let heightObj = obj.getBoundingClientRect().height
      switch (point.side) {
        case 'top': {
          x += widthObj * point.percent / 100
          break
        }
        case 'right': {
          x += widthObj
          y += heightObj * point.percent / 100
          break
        }
        case 'left': {
          y += heightObj * point.percent / 100
          break
        }
        case 'bottom': {
          x += widthObj * point.percent / 100
          y += heightObj
          break
        }
      }
      return {x, y}
    },
    calculateWidthAndHeightCoefficients () {
      let currentDelta = this.getCurrentDelta()
      this.widthCoefficient = currentDelta.X * 100 / this.deltaX / 100
      this.heightCoefficient = currentDelta.Y * 100 / this.deltaY / 100
    },
    getCurrentDelta () {
      return {X: Math.abs(this.x1 - this.x2), Y: Math.abs(this.y1 - this.y2)}
    },
    updateDeltaFlag () {
      this.deltaX = Math.abs(this.x1 - this.x2)
      this.deltaY = Math.abs(this.y1 - this.y2)
    },
    createPathLine () {
      this.coordinateArray = []
      this.coordinateArray.push({x: this.x1, y: this.y1})
      this.pathForLine = 'M' + this.x1 + ' ' + this.y1
      let x = this.x1
      let y = this.y1
      let r
      for (let point of this.pointEdgesArray) {
        switch (point.direction) {
          case 'left': {
            x -= point.value / 100 * this.deltaX
            r = Math.abs(x - this.coordinateArray[this.coordinateArray.length - 1].x)
            break
          }
          case 'up': {
            y -= point.value / 100 * this.deltaY
            r = Math.abs(y - this.coordinateArray[this.coordinateArray.length - 1].y)
            break
          }
          case 'down': {
            y += point.value / 100 * this.deltaY
            r = Math.abs(y - this.coordinateArray[this.coordinateArray.length - 1].y)
            break
          }
          case 'right': {
            x += point.value / 100 * this.deltaX
            r = Math.abs(x - this.coordinateArray[this.coordinateArray.length - 1].x)
            break
          }
        }
        r /= 2
        if (point.isArc) {
          this.coordinateArray.push({x: x, y: y})
          this.pathForLine += ' A' + r + ',' + r + ', 0 0 1 ' + x + ',' + y
        } else {
          this.coordinateArray.push({x: x, y: y})
          this.pathForLine += ' L ' + x + ' ' + y
        }
      }
      this.coordinateArray.push({x: this.x2, y: this.y2})
      this.pathForLine += ' L ' + this.x2 + ' ' + this.y2
    },
  },
  mounted () {
    this.object_1 = document.getElementById(this.id_1)
    this.object_2 = document.getElementById(this.id_2)
    if(this.object_1 && this.object_2) {
      this.updateLine()
      window.addEventListener('resize', this.updateLine)
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.updateLine)
  }
}
</script>

<style scoped>
.connect-line-component {
  width: 100%;
  height: 100%;
}
.path-line {
  stroke: #285876;
  stroke-width: 0.1vmax;
  fill: none;
}
.active-connect-line {
  stroke: var(--line-connect-color);
}
</style>
