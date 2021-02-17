<template>
  <div class="application-setting-dialog__wrapper">
    <div style="margin-top: 35px; margin-right: 10px;">{{$t('Interface.language') + ':'}}</div>
    <select class="language-select" v-model="$i18n.locale">
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
  display: flex;
  justify-content: center;
}

.language-select {
  margin-top: 30px;
  width: 100px;
  height: 30px;
}
</style>