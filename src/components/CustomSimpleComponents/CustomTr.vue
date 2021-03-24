<template>
  <tr ref="trRef">
    <slot/>
  </tr>
</template>

<script>
export default {
  name: "CustomTr",
  methods: {
    pressedTr() {
      this.$emit('trClick')
    }
  },
  emits: ['trClick'],
  mounted() {
    this.$refs.trRef.addEventListener('click', this.pressedTr)
  }
}
</script>

<style scoped>

</style>