<template>
  <div class="container-dialogs">
    <window-portal :open="antennaSystemDialogStatus.status"
                   :focus="antennaSystemDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'Антенная система'"
                   @closed="closeDialog('AntennaSystem')">
      <AntennaSystemDialog></AntennaSystemDialog>
    </window-portal>
    <window-portal :open="amplifierDialogStatus.status"
                   :focus="amplifierDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'Усилитель мощности'"
                   @closed="closeDialog('Amplifier')">
      <AmplifierDialog></AmplifierDialog>
    </window-portal>
    <window-portal :open="settingDialogStatus.status"
                   :focus="settingDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'Настройки'"
                   @closed="closeDialog('Setting')">
      <SettingDialog></SettingDialog>
    </window-portal>
    <window-portal :open="protocolDialogStatus.status"
                   :focus="protocolDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :width="1280"
                   :height="720"
                   :title="'Протокол'"
                   @closed="closeDialog('Protocol')">
      <protocol-dialog></protocol-dialog>
    </window-portal>
  </div>
</template>

<script>
import WindowPortal from "@/components/WindowsControl/windowPortalComponent";
import AntennaSystemDialog from "@/components/Dialogs/MainMenu/AntennaSystemDialog";
import AmplifierDialog from "@/components/Dialogs/Devices/AmplifierDialog";
import {mapState} from "vuex";
import SettingDialog from "@/components/Dialogs/Setting/ConnectionDialog";
import ProtocolDialog from "@/components/Dialogs/Protocols/ProtocolDialog";
export default {
  name: 'DialogsContainer',
  components: {
    ProtocolDialog,
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
      protocolDialogStatus: state => state.dialogStatus.protocolDialogStatus,
    })
  }
}
</script>

<style>
.container-dialogs {
  position: absolute;
}
</style>
