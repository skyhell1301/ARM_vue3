<template>
  <button ref="buttonRef">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  methods: {
    pressedButton () {
      this.$emit('buttonClick')
    }
  },
  mounted() {
    this.$refs.buttonRef.addEventListener('click', this.pressedButton)
  }
}
</script>
