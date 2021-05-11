<template>
  <select ref="refSelect">
    <slot/>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  emits: ['onInput', 'onChange'],
  props: {
    value: {}
  },
  methods: {
    onInput(e) {
      this.$emit('onInput', e)
    },
    onChange(e) {
      this.$emit('onChange', e)
    }
  },
  mounted() {
    this.$refs.refSelect.addEventListener('input', this.onInput)
    this.$refs.refSelect.addEventListener('change', this.onChange)
  }
}
</script>

<style scoped>

</style>
