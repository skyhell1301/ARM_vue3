<template>
  <input type="text" ref="refInput" :value="value"/>
</template>

<script>
export default {
  name: 'CustomInput',
  emits:['onInput', 'onChange'],
  props:{
    value: {

    }
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
    this.$refs.refInput.addEventListener('input', this.onInput)
    this.$refs.refInput.addEventListener('change', this.onChange)
  }
}
</script>

<style scoped>

</style>