<template>
  <div
      class="window-portal-class"
      v-if="open"
      v-show="windowLoaded"
  >
      <slot/>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 400,
    },
    left: {
      type: Number,
      default: 200,
    },
    top: {
      type: Number,
      default: 200,
    },
    noStyle: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_blank'
    },
    title: {
      type: String,
      default: 'ARM'
    }
  },
  data () {
    return {
      windowRef: null,
      windowLoaded: false,
      focusStatus: false
    }
  },
  watch: {
    open (newOpen) {
      if (newOpen) {
        this.openPortal()
      } else {
        this.closePortal()
      }
    },
    focus () {
      this.updateFocus()
    },
  },
  mounted () {
    if (this.open) {
      this.openPortal()
    }
    window.addEventListener('beforeunload', this.closePortal)
  },
  beforeUnmount () {
    this.closePortal()
    window.removeEventListener('beforeunload', this.closePortal)
  },
  methods: {
    updateFocus () {
      if(this.focus !== this.focusStatus) {
        this.focusStatus = this.focus
        this.windowRef.focus()
      }
    },
    openPortal () {
      if (this.windowRef) return
      const { width, height, left, top } = this
      // Open a nonexistent page to replace the content later
      const windowPath = window.location.origin + window.location.pathname
      let params = `width=${width},height=${height},left=${left},top=${top},menubar=no,location=no,resizable=no,scrollbars=yes,status=no`
      // const windowPath = 'window'
      // const windowPath = ''
      this.windowRef = window.open('', this.target, params)

      this.windowRef.addEventListener('beforeunload', this.closePortal)

        this.windowLoaded = true

        // Clear any existing content
        this.windowRef.document.body.innerHTML = ''
        this.windowRef.document.title = this.title

        this.windowRef.document.body.appendChild(this.$el)

        // Move the component into the window
        this.$emit('update:open', true)
        this.$emit('opened', this.windowRef)

        // Clone style nodes
        if (!this.noStyle) {
          for (const el of document.head.querySelectorAll('style, link[rel=stylesheet]')) {
            let clone = el.cloneNode(true)
            let newHref = windowPath.substring(0, windowPath.length - 1) + clone.getAttribute("href")
            clone.setAttribute('href', newHref)
            this.windowRef.document.head.appendChild(clone)
          }
        }
        this.$store.dispatch('windowsControl/addWindow', this.windowRef)

    },
    closePortal () {
      if (!this.windowRef) return
      this.windowLoaded = false
      this.$store.dispatch('windowsControl/closeWindow', this.windowRef)
      this.windowRef.close()
      this.windowRef = null
      this.$emit('update:open', false)
      this.$emit('closed')
    },
  },
}
</script>

<style type="text/css">
.window-portal-class {
  width: 100%;
  height: 100%;
}
</style>
