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
    <window-portal :open="testTranslyatorDialogStatus.status"
                   :focus="testTranslyatorDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'Тест-транслятор'"
                   @closed="closeDialog('TestTranslyator')">
      <TestTranslyatorDialog></TestTranslyatorDialog>
    </window-portal>
    <window-portal :open="MSHUDialogStatus.status"
                   :focus="MSHUDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'МШУ'"
                   @closed="closeDialog('MSHU')">
      <MSHUDialog></MSHUDialog>
    </window-portal>
    <window-portal :open="upConverterDialogStatus.status"
                   :focus="upConverterDialogStatus.focus"
                   :left="600"
                   :top="600"
                   :title="'Конвертер вверх'"
                   @closed="closeDialog('UpConverter')">
      <UpConverterDialog></UpConverterDialog>
    </window-portal>

    <window-portal :open="LVSSettingDialogStatus.status"
                   :focus="LVSSettingDialogStatus.focus"
                   :width="600"
                   :height="800"
                   :title="'Настройки'"
                   @closed="closeDialog('LVSSetting')">
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
import TestTranslyatorDialog from "@/components/Dialogs/Devices/TestTranslyatorDialog";
import MSHUDialog from "@/components/Dialogs/Devices/MSHUDialog";
import UpConverterDialog from "@/components/Dialogs/Devices/UpConverterDialog";
export default {
  name: 'DialogsContainer',
  components: {
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
      testTranslyatorDialogStatus: state => state.dialogStatus.testTranslyatorDialogStatus,
      MSHUDialogStatus: state => state.dialogStatus.MSHUDialogStatus,
      upConverterDialogStatus: state => state.dialogStatus.upConverterDialogStatus,

      LVSSettingDialogStatus: state => state.dialogStatus.LVSSettingDialogStatus,
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
