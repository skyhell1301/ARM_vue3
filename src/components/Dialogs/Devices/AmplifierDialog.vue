<template>
    <div class="ass">
      <StatusIndicatorComponent :is-active="rotateVar" style="width: 100px; height: 100px;"></StatusIndicatorComponent>
      <button ref="btnRef" :class="{'arrows-rotate' : rotateVar}">Кручусь</button>
      <ButtonComponent v-model:active-status="rotateVar" style="width: 100px; height: 100px;"></ButtonComponent>
    </div>
</template>

<script>
import ButtonComponent from "@/components/ControlAndIndication/ButtonComponent";
import StatusIndicatorComponent from "@/components/ControlAndIndication/StatusIndicatorComponent";
export default {
  name: 'AmplifierDialog',
  components: {StatusIndicatorComponent, ButtonComponent},
  data () {
    return {
      rotateVar: false,
    }
  },
  mounted() {
    this.$refs.btnRef.addEventListener('click', this.testMethod)
    // this.$refs.btnRef.onclick( this.testMethod)
  },
  methods: {
    testMethod () {
      this.rotateVar = !this.rotateVar
    }
  }
}
</script>

<style scoped>
.arrows-rotate {
  animation:spin 4s linear infinite;
}
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
