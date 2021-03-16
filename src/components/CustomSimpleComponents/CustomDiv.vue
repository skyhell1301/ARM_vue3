<template>
  <div ref="divRef">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CustomDiv',
  methods: {
    pressedDiv() {
      this.$emit('divClick')
    }
  },
  emits: ['divClick'],
  mounted() {
    this.$refs.divRef.addEventListener('click', this.pressedDiv)
  }
}
</script>
