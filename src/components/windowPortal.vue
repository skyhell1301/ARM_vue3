<template>
  <div v-if="open">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'windowPortal',
  props: {
    open: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      windowRef: null,
    }
  },
  watch: {
    open(newOpen) {
      if(newOpen) {
        this.openPortal();
      } else {
        this.closePortal();
      }
    }
  },
  methods: {
    openPortal() {
      console.log('kek')
      // window.open("", "", "width=600,height=400,left=200,top=200")
      this.windowRef = window.open("", "", "width=600,height=400,left=200,top=200");
      this.windowRef.addEventListener('beforeunload', this.closePortal);
      // magic!
      this.windowRef.document.body.appendChild(this.$el);
      this.copyStyles(window.document, this.windowRef.document);
    },
    closePortal() {
      if(this.windowRef) {
        this.windowRef.close();
        this.windowRef = null;
        this.$emit('close');
      }
    },
    copyStyles(sourceDoc, targetDoc) {
      Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
        if (styleSheet.cssRules) {
          // for <style> elements
          const newStyleEl = sourceDoc.createElement("style");

          Array.from(styleSheet.cssRules).forEach(cssRule => {
            // write the text of each rule into the body of the style element
            newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
          });

          targetDoc.head.appendChild(newStyleEl);
        } else if (styleSheet.href) {
          // for <link> elements loading CSS from a URL
          const newLinkEl = sourceDoc.createElement("link");

          newLinkEl.rel = "stylesheet";
          newLinkEl.href = styleSheet.href;
          targetDoc.head.appendChild(newLinkEl);
        }
      });
    }
  },
  mounted() {
    if(this.open) {
      this.openPortal();
    }
  },
  beforeUnmount() {
    if (this.windowRef) {
      this.closePortal();
    }
  }
}
</script>

<style scoped>

</style>
