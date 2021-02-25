<template>
  <div class="container-dialogs">
    <window-portal :open="antennaSystemDialogStatus.status"
                   :focus="antennaSystemDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'antenna_system'"
                   @closed="closeDialog('AntennaSystem')">
      <AntennaSystemDialog></AntennaSystemDialog>
    </window-portal>
    <window-portal :open="amplifierDialogStatus.status"
                   :focus="amplifierDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'amplifier'"
                   @closed="closeDialog('Amplifier')">
      <AmplifierDialog></AmplifierDialog>
    </window-portal>
    <window-portal :open="testTranslatorDialogStatus.status"
                   :focus="testTranslatorDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'test_translator'"
                   @closed="closeDialog('TestTranslyator')">
      <TestTranslyatorDialog></TestTranslyatorDialog>
    </window-portal>
    <window-portal :open="MSHUDialogStatus.status"
                   :focus="MSHUDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'lna'"
                   @closed="closeDialog('MSHU')">
      <MSHUDialog></MSHUDialog>
    </window-portal>
    <window-portal :open="upConverterDialogStatus.status"
                   :focus="upConverterDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'converter_up'"
                   @closed="closeDialog('UpConverter')">
      <UpConverterDialog></UpConverterDialog>
    </window-portal>

    <window-portal :open="LANSettingsDialogStatus.status"
                   :focus="LANSettingsDialogStatus.focus"
                   :width="600"
                   :height="800"
                   :title="'LAN_settings'"
                   @closed="closeDialog('LANSettings')">
      <SettingDialog></SettingDialog>
    </window-portal>
    <window-portal :open="protocolDialogStatus.status"
                   :focus="protocolDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :width="1280"
                   :height="720"
                   :title="'protocol'"
                   @closed="closeDialog('Protocol')">
      <protocol-dialog></protocol-dialog>
    </window-portal>
    <window-portal :open="applicationSettingsDialogStatus.status"
                   :focus="applicationSettingsDialogStatus.focus"
                   :width="600"
                   :height="600"
                   :title="'program_settings'"
                   @closed="closeDialog('ApplicationSettings')">
      <application-settings-dialog></application-settings-dialog>
    </window-portal>
  </div>
</template>

<script>
import WindowPortal from "@/components/WindowsControl/windowPortalComponent";
import AntennaSystemDialog from "@/components/Dialogs/MainMenu/AntennaSystemDialog";
import AmplifierDialog from "@/components/Dialogs/Equipment/AmplifierDialog";
import {mapState} from "vuex";
import SettingDialog from "@/components/Dialogs/Setting/ConnectionDialog";
import ProtocolDialog from "@/components/Dialogs/Protocols/ProtocolDialog";
import TestTranslyatorDialog from "@/components/Dialogs/Equipment/TestTranslyatorDialog";
import MSHUDialog from "@/components/Dialogs/Equipment/MSHUDialog";
import UpConverterDialog from "@/components/Dialogs/Equipment/UpConverterDialog";
import ApplicationSettingsDialog from "@/components/Dialogs/Setting/ApplicationSettingsDialog";
export default {
  name: 'DialogsContainer',
  components: {
    ApplicationSettingsDialog,
    UpConverterDialog,
    MSHUDialog,
    TestTranslyatorDialog,
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
      testTranslatorDialogStatus: state => state.dialogStatus.testTranslatorDialogStatus,
      MSHUDialogStatus: state => state.dialogStatus.MSHUDialogStatus,
      upConverterDialogStatus: state => state.dialogStatus.upConverterDialogStatus,

      LANSettingsDialogStatus: state => state.dialogStatus.LANSettingsDialogStatus,
      protocolDialogStatus: state => state.dialogStatus.protocolDialogStatus,
      applicationSettingsDialogStatus: state => state.dialogStatus.applicationSettingsDialogStatus,
    })
  }
}
</script>

<style>
.container-dialogs {
  position: absolute;
}
</style>
