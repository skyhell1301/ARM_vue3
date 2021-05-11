<template>
  <ModalWindow class="confirm" v-if="modalDialogStatus">
    <div class="confirm__container">
      <div class="confirm__question">{{ question }}</div>
      <div class="confirm__button-container">
        <CustomButton @buttonClick="confirm">Ок</CustomButton>
        <CustomButton @buttonClick="cancel">Отмена</CustomButton>
      </div>
    </div>
  </ModalWindow>

</template>

<script>
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import ModalWindow from "@/components/WindowsControl/ModalWindow";
export default {
  name: 'ModalQuestionConfirm',
  data() {
    return {
      question: '',
      modalDialogStatus: false,

      resolvePromise: undefined,
      rejectPromise: undefined,
    }
  },
  props: {

  },
  methods: {
    open(quest) {
      this.question = quest
      this.modalDialogStatus = true

      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve
        this.rejectPromise = reject
      })
    },
    confirm() {
      this.modalDialogStatus = false
      this.resolvePromise(true)
    },

    cancel() {
      this.modalDialogStatus = false
      this.resolvePromise(false)
      // Or you can throw an error
      // this.rejectPromise(new Error('User cancelled the dialogue'))
    },
  },
  components: {ModalWindow, CustomButton}
}
</script>

<style scoped>
.confirm__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  font-size: 1.2em;
}
.confirm__button-container {
  display: flex;
}
.confirm__button-container button {
  margin: 5px;
  min-width: 100px;
}
</style>