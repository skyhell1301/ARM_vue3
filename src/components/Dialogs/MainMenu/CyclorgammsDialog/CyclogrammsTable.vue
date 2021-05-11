<template>
  <table class="cyclogramms_table">
    <tr>
      <th>№</th>
      <th>{{ $t('Interface.cyclogramm_name') }}</th>
      <th>{{ $t('Interface.created_date') }}</th>
      <th>{{ $t('Interface.description') }}</th>
      <th>{{ $t('Interface.edit') }}</th>
      <th>{{ $t('Interface.delete') }}</th>
      <th>{{ $t('Interface.copy') }}</th>
    </tr>
    <CustomTr class="cylogramm"
              v-for="cyclogramm in cyclogrammsList"
              :key="cyclogramm.id"
              @trClick="updateActiveCyclogramm(cyclogramm)"
              :class="{'activeCyclogramm': cyclogramm === activeCyclogramm}"
    >
      <td>{{ cyclogramm.id }}</td>
      <td v-if="editStatus.status && editStatus.id === cyclogramm.id">
        <CustomInput :value="cyclogramm.name"
                     @onInput="setNewCycloName({name: $event.target.value, id: cyclogramm.id})"/>
      </td>
      <td v-else>{{ cyclogramm.name }}</td>
      <td>{{ cyclogramm.created }}</td>
      <td>{{ cyclogramm.descr }}</td>
      <td>
        <div v-if="editStatus.status && editStatus.id === cyclogramm.id">
          <CustomButton class="edit-button" @buttonClick.stop="editCyclogramm(cyclogramm)">✅</CustomButton>
          <CustomButton class="edit-button" @buttonClick.stop="clearEditStatus">🚫</CustomButton>
        </div>

        <CustomButton class="edit-button" v-else @buttonClick.stop="changeEditStatus(cyclogramm)">📝</CustomButton>
      </td>
      <td>
        <CustomButton class="edit-button" @buttonClick.stop="deleteCyclogramm(cyclogramm)">❌</CustomButton>
      </td>
      <td>
        <CustomButton class="edit-button" @buttonClick.stop="copyCyclogramm(cyclogramm)">📄📄</CustomButton>
      </td>
    </CustomTr>
    <ModalQuestionConfirm ref="confirm"/>
  </table>
</template>

<script>
import CustomTr from "@/components/CustomSimpleComponents/CustomTr"
import CustomButton from "@/components/CustomSimpleComponents/CustomButton";
import REST from "@/mixins/REST";
import CustomInput from "@/components/CustomSimpleComponents/CustomInput";
import ModalQuestionConfirm from "@/components/WindowsControl/ModalQuestionConfirm";

export default {
  name: 'CyclogrammsTable',
  components: {
    ModalQuestionConfirm,
    CustomInput,
    CustomButton,
    CustomTr
  },
  data() {
    return {
      activeCyclogramm: null,
      editStatus: {id: null, status: false},
      newCycloName: {id: null, name: null},
      requestBody: {},
    }
  },
  props: {
    cyclogrammsList: {
      type: Object,
      default: null
    }
  },
  mixins: [REST],
  methods: {
    updateActiveCyclogramm(cyclo) {
      if (this.activeCyclogramm === cyclo && this.editStatus.id === cyclo.id) {
        return
      }
      this.activeCyclogramm = this.activeCyclogramm === cyclo ? null : cyclo
      this.clearEditStatus()
      this.$emit('updateActiveCyclo', this.activeCyclogramm)
    },
    changeEditStatus(cyclogramm) {
      if (this.activeCyclogramm !== cyclogramm) this.updateActiveCyclogramm(cyclogramm)
      this.editStatus.status = !this.editStatus.status
      if (this.editStatus.status) this.editStatus.id = cyclogramm.id
    },
    setNewCycloName(cycloName) {
      this.newCycloName.id = cycloName.id
      this.newCycloName.name = cycloName.name
    },
    async editCyclogramm(cyclogramm) {
      if (cyclogramm.id === this.newCycloName.id) {
        let userChecked = await this.$refs.confirm.open(`Установить название циклограммы "${this.newCycloName.name}" вместо "${cyclogramm.name}?"`)
        if(userChecked) {
          this.requestBody = {
            command: {
              cyclogram_id: cyclogramm.id,
              newname: this.newCycloName.name,
              executionType: "renameCyclogram",
              clientid: this.$store.state.app_id
            },
          }
          let res = await this.sendRequest(this.requestBody)
          if (res.ok) {
            this.$store.dispatch('protocol/addLogMessage', {text: `Установлено новое название циклограммы "${this.newCycloName.name}"`})
            this.clearEditStatus()
          }
        }
      } else {
        this.clearEditStatus()
      }

    },
    async deleteCyclogramm(cyclogramm) {
      let userChecked = await this.$refs.confirm.open(`Удалить циклограмму "${cyclogramm.name}"?`)
      if(userChecked) {
        this.requestBody = {
          command: {
            cyclogram_id: cyclogramm.id,
            executionType: "deleteCyclogram",
            clientid: this.$store.state.app_id
          },
        }
        let res = await this.sendRequest(this.requestBody)
        if (res.ok) {
          this.$store.dispatch('protocol/addLogMessage', {text: `Удалена циклограмма: ${cyclogramm.name}`})
          this.clearEditStatus()
        }
      }
    },
    async copyCyclogramm(cyclogramm) {
      let userChecked = await this.$refs.confirm.open(`Копировать циклограмму "${cyclogramm.name}"?`)
      if(userChecked) {
        this.requestBody = {
            command: {
              cyclogram_id: cyclogramm.id,
              executionType: "copyCyclogram",
              clientid: this.$store.state.app_id
            },
          }
          let res = await this.sendRequest(this.requestBody)
          if (res.ok) {
            this.$store.dispatch('protocol/addLogMessage', {text: `Скопирована циклограмма ${cyclogramm.name}`})
            this.clearEditStatus()
          }
      }
    },
    clearEditStatus() {
      this.editStatus.id = null
      this.editStatus.status = false
      this.newCycloName.name = null
      this.newCycloName.id = null
    },
    async sendRequest(body) {
      return await this.sendRESTCommand('http://smotr/site/cyclogramapi',
          'POST', null, null, JSON.stringify(body))
    }
  },
  emits: ['updateActiveCyclo']
}
</script>

<style scoped>
.cylogramms-dialog__container table {
  user-select: none;
  width: 100%;
  margin-bottom: 20px;
}

.cylogramm:hover {
  cursor: pointer;
  color: var(--main-color);
}

.activeCyclogramm {
  background: var(--good-color);
}

.cylogramms-dialog__container th {
  background: var(--main-color);
  color: #f6f1f5;
}

.cylogramms-dialog__container td {
  box-shadow: 0 0 5px 0.3px rgba(180, 180, 180, 0.8);
  text-align: center;
}

.edit-button {
  background: none;
  border: none;
  cursor: pointer;
}

.edit-button:hover {
  text-shadow: 0 0 3px var(--main-color);
}
</style>