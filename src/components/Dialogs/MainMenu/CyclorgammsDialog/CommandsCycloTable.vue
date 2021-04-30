<template>
  <table class="cyclogramms_table">
    <tr>
      <th>№</th>
      <th>{{ $t('Interface.device_name') }}</th>
      <th>{{ $t('Interface.command_name') }}</th>
      <th>{{ $t('Interface.device_number') }}</th>
      <th>{{ $t('Interface.set_value') }}</th>
      <th>{{ $t('Interface.address') }}</th>
      <th>{{ $t('Interface.timeout') }}</th>
      <th>{{ $t('Interface.status') }}</th>
    </tr>

    <CustomTr v-for="command in activeCyclogramm.cyclodata"
              :key="command"
              @trClick="updateActiveCommand(command)"
              class="cylogramm"
              :class="{'activeCyclogramm': command === activeCommand}"
    >
      <td>{{ command.NumInCicl }}</td>
      <td>{{ command.unit_type }}</td>
      <td>{{ command.command_txt + ' (' + command.CommandNum + ')' }}</td>
      <td>{{ command.UnitNum }}</td>
      <td>{{ command.Params }}</td>
      <td>{{ }}</td>
      <td>{{ command.TimeOut }}</td>
      <td v-if="command.status === 2">{{ '✅' }}</td>
      <td v-else-if="command.status === 1">{{ '🏃💨' }}</td>
      <td v-else>{{ command.status }}</td>
    </CustomTr>
  </table>
</template>

<script>
import CustomTr from "@/components/CustomSimpleComponents/CustomTr";
export default {
  name: 'CommandsCycloTable',
  components: {CustomTr},
  emits: ['updateActiveCommand'],
  data() {
    return {
      activeCommand: null
    }
  },
  props: {
    activeCyclogramm: {
      type: Object,
      default: null
    }
  },
  methods: {
    updateActiveCommand(command) {
      this.activeCommand = this.activeCommand === command ? null : command
      this.$emit('updateActiveCommand', this.activeCommand)
    },
  }
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
</style>