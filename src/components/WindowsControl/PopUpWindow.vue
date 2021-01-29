<template>
  <div
    :id="windowId"
    class="vue-window-modal"
    style="z-index: 9999"
    @mouseover.once="addListeners"
    v-bind:style="{backgroundColor}">
    <div :id="windowId + '-' + 'header'" class="vue-window-modal-header" @dblclick="setSizeWindow">
      <h2 class="title">{{ title }}</h2>
      <div class="buttons-box">
        <div class="button-container size-btn" @click="setSizeWindow"></div>
        <div class="button-container close-btn"  @click="disponse"></div>
      </div>
    </div>
    <div class="content-clot">
      <slot>
      </slot>
    </div>
    <div
      v-for="stick in sticks"
      class="vdr-stick"
      :key="stick.id"
      :class="['vdr-stick-' + stick, isResizable ? '' : 'not-resizable']"
      @mousedown.stop.prevent="stickDown(stick, $event)"
      @touchstart.stop.prevent="stickDown(stick, $event)"
      :style="vdrStick(stick)">
    </div>
    <div
      :id="windowId + '-' + 'rectangle'"
      class="closeRectangle"
      :class="{closeRectangleActive: isCloseRectangleActive}">
    </div>
  </div>
</template>

<script>
const styleMapping = {
  y: {
    t: 'top',
    m: 'top',
    b: 'bottom'
  },
  x: {
    l: 'left',
    m: 'left',
    r: 'right'
  }
}
export default {
  name: 'PopUpWindow',
  data () {
    return {
      windowId: (function () {
        const one = Math.floor((Math.random() * 1000000) + 1) + ''
        const two = Math.floor((Math.random() * 1000000) + 1) + ''
        const three = Math.floor((Math.random() * 1000000) + 1) + ''
        return 'id' + one + two + three
      })(),
      widthToString: '',
      heightToString: '',
      widthWindow: '',
      heightWindow: '',
      stickSize: 8,
      isCloseRectangleActive: false,
      widthCloseRectangle: '',
      heightCloseRectangle: '',
      isMaxSize: false,
      space: 20,
      maxHeightWindow: '',
      maxWidthWindow: ''
    }
  },
  props: {
    nameStatus: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: true
    },
    title: String,
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    minHeight: {
      type: Number,
      default: 300
    },
    minWidth: {
      type: Number,
      default: 300
    },
    maxHeight: {
      type: Number,
      default: 0
    },
    maxWidth: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: '#f2f2f2'
    },
    isResizable: {
      type: Boolean, default: true
    },
    sticks: {
      type: Array,
      default: function () {
        return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
      }
    },
    link: {
      type: String
    }
  },
  methods: {
    getThisWindowAndHeaderElements () {
      return {
        // window: window.document.getElementById(this.windowId),
        window: this.$el,
        windowHeader: window.document.getElementById(this.windowId + '-' + 'header'),
        rectangle: window.document.getElementById(this.windowId + '-' + 'rectangle')
      }
    },
    dragElement () {
      let context = this
      let pos1 = 0
      let pos2 = 0
      let pos3 = 0
      let pos4 = 0
      const _window = this.getThisWindowAndHeaderElements().window
      const _windowHeader = this.getThisWindowAndHeaderElements().windowHeader
      const _rectangle = this.getThisWindowAndHeaderElements().rectangle
      _rectangle.style.left = '0px'
      _rectangle.style.top = '0px'
      _windowHeader.onmousedown = dragMouseDown

      function dragMouseDown (e) {
        // get the mouse cursor position at startup:
        pos3 = e.clientX
        pos4 = e.clientY
        context.heightCloseRectangle = context.heightWindow
        context.widthCloseRectangle = context.widthWindow
        // context.isCloseRectangleActive = true
        document.onmouseup = closeDragElement
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag
        _windowHeader.style.cursor = '-webkit-grabbing'
      }

      function elementDrag (e) {
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        // set the element's new position:
        if (_window.offsetTop < (window.innerHeight - 35)) {
          _window.style.top = (_window.offsetTop - pos2) + 'px'
          // _window.style.transform = 'translateY(' + -pos2 + 'px)'
        } else {
          context.centerWindow()
        }
        if (_window.offsetLeft < (window.innerWidth - 35)) {
          _window.style.left = (_window.offsetLeft - pos1) + 'px'
        } else {
          context.centerWindow()
        }
        if (_window.offsetTop < 0) {
          _window.style.top = '0px'
        }
        if (_window.offsetLeft < -context.widthWindow + 50) {
          context.centerWindow()
        }
      }

      function closeDragElement () {
        context.isCloseRectangleActive = false
        //  stop moving when mouse button is released:
        document.onmouseup = null
        document.onmousemove = null
        _windowHeader.style.cursor = 'pointer'
      }
    },
    stickDown: function (stick, ev) {
      if (!this.isResizable || !this.active) {
        return
      }
      let context = this
      let pos1 = 0
      let pos2 = 0
      let pos3 = 0
      let pos4 = 0
      const _window = this.getThisWindowAndHeaderElements().window
      const _rectangle = this.getThisWindowAndHeaderElements().rectangle
      _rectangle.style.left = '0px'
      _rectangle.style.top = '0px'
      context.heightCloseRectangle = context.heightWindow
      context.widthCloseRectangle = context.widthWindow
      pos3 = ev.clientX
      pos4 = ev.clientY
      this.isCloseRectangleActive = true
      document.onmouseup = closeResizeElement
      document.onmousemove = elementResize

      function elementResize (ev) {
        pos1 = pos3 - ev.clientX
        pos2 = pos4 - ev.clientY
        switch (stick) {
          case 'tl': {
            topSizeRectangle()
            leftSizeRectangle()
            break
          }
          case 'tm': {
            topSizeRectangle()
            break
          }
          case 'tr': {
            topSizeRectangle()
            rightSizeRectangle()
            break
          }
          case 'ml': {
            leftSizeRectangle()
            break
          }
          case 'mr': {
            rightSizeRectangle()
            break
          }
          case 'bl': {
            bottomSizeRectangle()
            leftSizeRectangle()
            break
          }
          case 'bm': {
            bottomSizeRectangle()
            break
          }
          case 'br': {
            bottomSizeRectangle()
            rightSizeRectangle()
            break
          }
        }
      }
      function topSizeRectangle () {
        if (context.heightWindow + pos2 >= context.minHeight) {
          _rectangle.style.top = -pos2 + 'px'
          context.heightCloseRectangle = context.heightWindow + pos2
        }
      }
      function bottomSizeRectangle () {
        if (context.heightWindow - pos2 >= context.minHeight) {
          context.heightCloseRectangle = context.heightWindow - pos2
        }
      }
      function leftSizeRectangle () {
        if (context.widthWindow + pos1 >= context.minWidth) {
          _rectangle.style.left = -pos1 + 'px'
          context.widthCloseRectangle = context.widthWindow + pos1
        }
      }
      function rightSizeRectangle () {
        if (context.widthWindow - pos1 >= context.minWidth) {
          context.widthCloseRectangle = context.widthWindow - pos1
        }
      }
      function topSize () {
        // if (context.heightWindow + pos2 >= context.minHeight && _window.offsetTop - pos2 < _window.offsetTop + context.heightWindow - 10) {
        //   _window.style.top = (_window.offsetTop - pos2) + 'px'
        //   context.heightWindow += pos2
        // }
        _window.style.top = (_window.offsetTop + _rectangle.offsetTop) + 'px'
        context.heightWindow = context.heightCloseRectangle
      }
      function bottomSize () {
        // if (context.heightWindow - pos2 >= context.minHeight && _window.offsetTop + context.heightWindow - pos2 > _window.offsetTop + 10) {
        //   _window.style.bottom = (_window.offsetTop + context.heightWindow - pos2) + 'px'
        //   context.heightWindow -= pos2
        // }
        _window.style.bottom = (_window.offsetTop + _rectangle.offsetTop) + 'px'
        context.heightWindow = context.heightCloseRectangle
      }
      function rightSize () {
        // if (context.widthWindow - pos1 >= context.minWidth && _window.offsetLeft + context.widthWindow - pos1 > _window.offsetLeft + 10) {
        //   _window.style.right = (_window.offsetLeft + context.widthWindow - pos1) + 'px'
        //   context.widthWindow -= pos1
        // }
        _window.style.right = (_window.offsetLeft - _rectangle.offsetLeft) + 'px'
        context.widthWindow = context.widthCloseRectangle
      }
      function leftSize () {
        // if (context.widthWindow + pos1 >= context.minWidth && _window.offsetLeft - pos1 < _window.offsetLeft + context.widthWindow - 10) {
        //   _window.style.left = (_window.offsetLeft - pos1) + 'px'
        //   context.widthWindow += pos1
        // }
        _window.style.left = (_window.offsetLeft + _rectangle.offsetLeft) + 'px'
        context.widthWindow = context.widthCloseRectangle
      }
      function closeResizeElement () {
        context.isCloseRectangleActive = false
        switch (stick) {
          case 'tl': {
            topSize()
            leftSize()
            break
          }
          case 'tm': {
            topSize()
            break
          }
          case 'tr': {
            topSize()
            rightSize()
            break
          }
          case 'ml': {
            leftSize()
            break
          }
          case 'mr': {
            rightSize()
            break
          }
          case 'bl': {
            leftSize()
            bottomSize()
            break
          }
          case 'bm': {
            bottomSize()
            break
          }
          case 'br': {
            rightSize()
            bottomSize()
            break
          }
        }
        if (_window.offsetTop < 0) {
          _window.style.top = '0px'
        }
        if (_window.offsetLeft < 0) {
          _window.style.left = '0px'
        }
        //  stop moving when mouse button is released:
        document.onmouseup = null
        document.onmousemove = null
      }
    },
    setSizeWindow () {
      if (!this.isResizable) return
      if (this.isMaxSize) {
        this.setMinSizeWindow()
      } else {
        this.setMaxSizeWindow()
      }
    },
    setMaxSizeWindow () {
      const _window = this.getThisWindowAndHeaderElements().window
      _window.style.top = '0px'
      _window.style.left = '0px'
      this.widthWindow = this.maxWidthWindow
      this.heightWindow = this.maxHeightWindow
    },
    setMinSizeWindow () {
      this.widthWindow = this.minWidth
      this.heightWindow = this.minHeight
      this.centerWindow()
    },
    getHighestWindow () {
      const windows = Array.from(window.document.getElementsByClassName('vue-window-modal'))
      const zIndexs = windows.map(el => Number(el.style.zIndex))
      const highest = Math.max.apply(Math, zIndexs)
      return highest
    },
    sendWindowToHighest () {
      this.getThisWindowAndHeaderElements().window.style.zIndex = this.getHighestWindow() + 1
    },
    centerWindow () {
      let myElement = this.getThisWindowAndHeaderElements().window
      let pageWidth = window.screen.width
      let pageHeight = window.screen.height
      const diff = this.activeWindows() * 20
      myElement.style.top = (pageHeight / 2) - (this.heightWindow / 2) + diff + 'px'
      myElement.style.left = (pageWidth / 2) - (this.widthWindow / 2) + diff + 'px'
    },
    checkTheresIsAnyAnotherCenteredWindow () { // not being used anymore but working well...
      const windows = Array.from(window.document.getElementsByClassName('vue-window-modal'))
      const centeredWindows = windows.filter(el => {
        let myElement = el
        let pageWidth = window.innerWidth
        let pageHeight = window.innerHeight
        let myElementWidth = myElement.offsetWidth
        let myElementHeight = myElement.offsetHeight
        return el.style.top === (pageHeight / 2) - (myElementHeight / 2) + 'px' &&
          el.style.left === (pageWidth / 2) - (myElementWidth / 2) + 'px'
      })
      return centeredWindows
    },
    activeWindows () {
      const windows = Array.from(window.document.getElementsByClassName('vue-window-modal'))
      const openedWindows = windows.filter(el => {
        return el.style.display === 'block'
      })
      return openedWindows.length
    },
    hide () {
      this.getThisWindowAndHeaderElements().window.style.display = 'none'
    },
    show () {
      this.getThisWindowAndHeaderElements().window.style.display = 'block'
    },
    updateSizeStatus () {
      if (this.widthWindow === this.maxWidthWindow && this.heightWindow === this.maxHeightWindow) {
        this.isMaxSize = true
      } else {
        this.isMaxSize = false
      }
    },
    updateSizeWindow () {
      this.getThisWindowAndHeaderElements().window.style.height = this.heightWindow + 'px'
      this.getThisWindowAndHeaderElements().window.style.width = this.widthWindow + 'px'
      this.updateSizeStatus()
    },
    addListeners () {
      this.dragElement()
      this.getThisWindowAndHeaderElements().window.addEventListener('mousedown', () => {
        this.sendWindowToHighest()
      })
    },
    disponse () {
      this.$emit('clickClose')
      //this.$destroy()
      this.$store.dispatch(this.nameStatus)
      return false
    }
  },
  computed: {
    vdrStick () {
      return (stick) => {
        let w = 10
        let h = 10
        let y = 0
        let x = 0
        let stickStyle = {}
        switch (stick) {
          case 'tm': {
            x = 10
            w = this.widthWindow - 20
            h = 5
            break
          }
          case 'ml': {
            y = 10
            w = 5
            h = this.heightWindow - 20
            break
          }
          case 'mr': {
            y = 10
            w = 5
            h = this.heightWindow - 20
            break
          }
          case 'bm': {
            x = 10
            w = this.widthWindow - 20
            h = 5
            break
          }
        }
        stickStyle = {
          width: w + 'px',
          height: h + 'px'
        }
        stickStyle[styleMapping.y[stick[0]]] = y + `px`
        stickStyle[styleMapping.x[stick[1]]] = x + `px`
        return stickStyle
      }
    }
  },
  watch: {
    active (newValue) {
      if (newValue) {
        this.sendWindowToHighest()
        this.show()
        this.centerWindow()
      } else {
        this.hide()
      }
    },
    widthWindow: function () {
      this.getThisWindowAndHeaderElements().window.style.width = this.widthWindow + 'px'
      this.updateSizeStatus()
    },
    heightWindow: function () {
      this.getThisWindowAndHeaderElements().window.style.height = this.heightWindow + 'px'
      this.updateSizeStatus()
    },
    widthCloseRectangle: function () {
      this.getThisWindowAndHeaderElements().rectangle.style.width = this.widthCloseRectangle + 'px'
    },
    heightCloseRectangle: function () {
      this.getThisWindowAndHeaderElements().rectangle.style.height = this.heightCloseRectangle + 'px'
    }
  },
  created: function () {
    if (this.maxHeight === 0) {
      this.maxHeightWindow = window.screen.height
    } else {
      this.maxHeightWindow = this.maxHeight
    }
    if (this.maxWidth === 0) {
      this.maxWidthWindow = window.screen.width
    } else {
      this.maxWidthWindow = this.maxWidth
    }
  },
  mounted () {
    if (this.width >= this.minWidth) {
      this.widthWindow = this.width
    }
    if (this.height >= this.minHeight) {
      this.heightWindow = this.height
    }
    this.$el.style.height = this.heightWindow
    this.$el.style.width = this.widthWindow
    this.centerWindow()
  }
}
</script>
<style>
.vue-window-modal {
  position: absolute;
  border-radius: 5px;
  background-color: #f7f7f7;
  box-shadow: 7px 7px 50px 5px rgba(0, 0, 0, 0.13);
  border: 1px solid #8080802b;
  transition: width .1s, height .1s;
  display: grid;
  grid-template-rows: 1fr 30fr;
}

.vue-window-modal .vue-window-modal-header {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: rgba(144,144,143,0.41);
  color: white;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vue-window-modal .vue-window-modal-header h2 {
  flex-grow: 30;
  margin: 0 0 0 10%;
}

.buttons-box {
  flex-grow: 1;
  margin-bottom: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: space-evenly;
}

.vue-window-modal .vue-window-modal-header .button-container {
  height: 25px;
  width: 25px;
  cursor: pointer;
  transition: 0.3s;
}
.vue-window-modal .vue-window-modal-header .button-container:hover {
  box-shadow: 0 0 1px rgba(0,0,0,0.5);
}
.size-btn {
  background-image: url('../../assets/images/stopsquarebuttonformediainterface_87472.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: center;
}
.close-btn {
  background-image: url('../../assets/images/cancel_close_delete_exit_logout_remove_x_icon_123217.png');
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;
}
.vdr-stick {
  box-sizing: border-box;
  position: absolute;
  font-size: 1px;
  background: none;
  border: none;
}
.content-clot {
  height: 1fr;
}
.inactive .vdr-stick {
  display: none;
}

.vdr-stick-tl, .vdr-stick-br {
  cursor: nwse-resize;
}

.vdr-stick-tm, .vdr-stick-bm {
  cursor: ns-resize;
}

.vdr-stick-tr, .vdr-stick-bl {
  cursor: nesw-resize;
}

.vdr-stick-ml, .vdr-stick-mr {
  cursor: ew-resize;
}

.vdr-stick.not-resizable {
  display: none;
}
.closeRectangle {
  box-sizing: border-box;
  border-radius: 5px;
  position: absolute;
  background-color: rgba(69,69,69,0.41);
  display: none;
}
.closeRectangleActive {
  display: inline;
}
</style>
