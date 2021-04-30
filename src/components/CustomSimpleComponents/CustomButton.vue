<template>
  <button style="font-size:.9em;" ref="buttonRef">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  methods: {
    pressedButton (e) {
      this.$emit('buttonClick', e)
    }
  },
  emits:['buttonClick'],
  mounted() {
    this.$refs.buttonRef.addEventListener('click', this.pressedButton)
  }
}
</script>
