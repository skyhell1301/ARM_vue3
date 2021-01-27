<template>
  <div class="container-dialogs">
    <window-portal :open="antennaSystemDialogStatus"
                   :left="600"
                   :top="600"
                   :title="'Антенная система'"
                   @closed="closeDialog('AntennaSystem')">
      <AntennaSystemDialog></AntennaSystemDialog>
    </window-portal>
    <window-portal :open="amplifierDialogStatus"
                   :left="600"
                   :top="600"
                   @closed="closeDialog('Amplifier')">
      <AmplifierDialog></AmplifierDialog>
    </window-portal>
    <window-portal :open="settingDialogStatus"
                   :left="600"
                   :top="600"
                   :title="'Настройки'"
                   @closed="closeDialog('Setting')">
      <SettingDialog></SettingDialog>
    </window-portal>
  </div>
</template>

<script>
import WindowPortal from "@/components/windowPortal";
import AntennaSystemDialog from "@/components/Dialogs/MainMenu/AntennaSystemDialog";
import AmplifierDialog from "@/components/Dialogs/Devices/AmplifierDialog";
import {mapState} from "vuex";
import SettingDialog from "@/components/Dialogs/Setting/ConnectionDialog";
export default {
  name: 'DialogsContainer',
  components: {
    SettingDialog,
    AmplifierDialog,
    AntennaSystemDialog,
    WindowPortal
  },
  methods: {
    closeDialog (dialog) {
      this.$store.dispatch('dialogStatus/change' + dialog + 'DialogStatus', false)
    },
  },
  computed: {
    ...mapState({
      amplifierDialogStatus: state => state.dialogStatus.amplifierDialogStatus,
      antennaSystemDialogStatus: state => state.dialogStatus.antennaSystemDialogStatus,
      settingDialogStatus: state => state.dialogStatus.settingDialogStatus,
    })
  }
}
</script>

<style>
.container-dialogs {
  position: absolute;
}
</style>
