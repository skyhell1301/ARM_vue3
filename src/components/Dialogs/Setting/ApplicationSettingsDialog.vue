<template>
  <div class="application-setting-dialog__wrapper">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'ApplicationSettingsDialog'
}
</script>

<style scoped>
.application-setting-dialog__wrapper {

}

</style>