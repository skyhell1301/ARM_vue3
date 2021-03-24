<template>
  <div class="nav-menu-container">
    <MenuItemComponent :title-menu-item="$t('Interface.main_menu')">
      <div class="setting-item">
        <TelemetriaIcon class="item-icon"></TelemetriaIcon>
        <div class="item-title">{{$t('Interface.telemetry')}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeCyclogrammsDialogStatus')">
        <CycklogrammiIcon class="item-icon"></CycklogrammiIcon>
        <div class="item-title">{{$t('Interface.cyclogramms')}}</div>
      </div>
      <div class="setting-item">
        <ConfigurationIcon class="item-icon"></ConfigurationIcon>
        <div class="item-title">{{$t('Interface.equipment_configuration')}}</div>
      </div>
      <div class="setting-item">
        <OperabilityIcon class="item-icon"></OperabilityIcon>
        <div class="item-title">{{$t('Interface.equipment_performance')}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAntennaSystemDialogStatus')">
        <AntennaIcon class="item-icon"></AntennaIcon>
        <div class="item-title">{{$t('Interface.antenna_system')}}</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent title-menu-item="Cortex">
      <div class="setting-item">
        <CortexIcon class="item-icon"></CortexIcon>
        <div class="item-title">Cortex 1</div>
      </div>
      <div class="setting-item">
        <CortexIcon class="item-icon"></CortexIcon>
        <div class="item-title">Cortex 2</div>
      </div>
      <div class="setting-item">
        <HummerIcon class="item-icon"></HummerIcon>
        <div class="item-title">{{$t('Interface.training') + ' Cortex'}}</div>
      </div>
      <div class="setting-item">
        <TelemetriaImitationIcon class="item-icon"></TelemetriaImitationIcon>
        <div class="item-title">{{$t('Interface.telemetry_imitation')}}</div>
      </div>
      <div class="setting-item">
        <CortexWallIcon class="item-icon"></CortexWallIcon>
        <div class="item-title">{{$t('Interface.wall') + ' Cortex'}}</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent :title-menu-item="$t('Interface.equipment')">
      <div class="setting-item">
        <ArrowUpFIcon class="item-icon"></ArrowUpFIcon>
        <div class="item-title">{{$t('Interface.converter_up') + ' 1'}}</div>
      </div>
      <div class="setting-item">
        <ArrowUpFIcon class="item-icon"></ArrowUpFIcon>
        <div class="item-title">{{$t('Interface.converter_up') + ' 2'}}</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">{{$t('Interface.bur_up')}}</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">{{$t('Interface.bur_up')}}</div>
      </div>
      <div class="setting-item">
        <ArrowDownFIcon class="item-icon"></ArrowDownFIcon>
        <div class="item-title">{{$t('Interface.converter_down') + ' 1'}}</div>
      </div>
      <div class="setting-item">
        <ArrowDownFIcon class="item-icon"></ArrowDownFIcon>
        <div class="item-title">{{$t('Interface.converter_down') + ' 2'}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAmplifierDialogStatus')">
        <AmplifierIcon class="item-icon"></AmplifierIcon>
        <div class="item-title">{{$t('Interface.um_up') + ' 1'}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAmplifierDialogStatus')">
        <AmplifierIcon class="item-icon"></AmplifierIcon>
        <div class="item-title">{{$t('Interface.um_up') + ' 2'}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeMatrixUpDialogStatus')">
        <MatrixIcon class="item-icon"></MatrixIcon>
        <div class="item-title">{{$t('Interface.matrix_up')}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeMatrixDownDialogStatus')">
        <MatrixIcon class="item-icon" style="transform: rotate(180deg)"></MatrixIcon>
        <div class="item-title">{{$t('Interface.matrix_down')}}</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">{{$t('Interface.lna')}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeTestTranslatorDialogStatus')">
        <TestTranslyatorIcon class="item-icon"></TestTranslyatorIcon>
        <div class="item-title">{{$t('Interface.test_translator')}}</div>
      </div>
      <div class="setting-item">
        <ClockIcon class="item-icon"></ClockIcon>
        <div class="item-title">СЕВ</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent :title-menu-item="$t('Interface.protocols')">
      <div class="setting-item" @click="dialogOpen('changeProtocolDialogStatus')">
        <ProtocolIcon class="item-icon"></ProtocolIcon>
        <div class="item-title">{{$t('Interface.protocol')}}</div>
      </div>
      <div class="setting-item">
        <BellIcon class="item-icon"></BellIcon>
        <div class="item-title">{{$t('Interface.alarm_protocol')}}</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent :title-menu-item="$t('Interface.settings')">
      <div class="setting-item" @click="dialogOpen('changeApplicationSettingsDialogStatus')">
        <GearIcon class="item-icon" style="stroke-width: 5px; stroke: rgba(255, 255, 255, 0.7);"></GearIcon>
        <div class="item-title">{{$t('Interface.program_settings')}}</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeLANSettingsDialogStatus')">
        <LocalNetworkIcon class="item-icon"></LocalNetworkIcon>
        <div class="item-title">{{$t('Interface.LAN_settings')}}</div>
      </div>
      <div class="setting-item">
        <BVOIcon class="item-icon"></BVOIcon>
        <div class="item-title">БВО</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent :title-menu-item="$t('Interface.help')">
      <div class="setting-item">
        <SKUIcon class="item-icon"></SKUIcon>
        <div class="item-title">{{$t('Interface.specification')}}</div>
      </div>
      <div class="setting-item">
        <ProtocolIcon class="item-icon"></ProtocolIcon>
        <div class="item-title">{{$t('Interface.tsu_protocol')}}</div>
      </div>
      <div class="setting-item">
        <PCIcon class="item-icon"></PCIcon>
        <div class="item-title">{{$t('Interface.system_information')}}</div>
      </div>
      <div class="setting-item">
        <HelpIcon class="item-icon"></HelpIcon>
        <div class="item-title">{{$t('Interface.about')}}</div>
      </div>
    </MenuItemComponent>
  </div>
</template>

<script>
import MenuItemComponent from './MenuItemComponent'
import PCIcon from '../../assets/images/SVGIconComponents/PCIcon'
import TelemetriaIcon from '../../assets/images/SVGIconComponents/TelemetriaIcon'
import CycklogrammiIcon from '../../assets/images/SVGIconComponents/CycklogrammiIcon'
import ConfigurationIcon from '../../assets/images/SVGIconComponents/ConfigurationIcon'
import AntennaIcon from '../../assets/images/SVGIconComponents/AntennaIcon'
import OperabilityIcon from '../../assets/images/SVGIconComponents/OperabilityIcon'
import CortexIcon from '../../assets/images/SVGIconComponents/CortexIcon'
import HummerIcon from '../../assets/images/SVGIconComponents/HummerIcon'
import TelemetriaImitationIcon from '../../assets/images/SVGIconComponents/TelemetriaImitationIcon'
import CortexWallIcon from '../../assets/images/SVGIconComponents/CortexWallIcon'
import ArrowUpFIcon from '../../assets/images/SVGIconComponents/ArrowUpFIcon'
import ArrowDownFIcon from '../../assets/images/SVGIconComponents/ArrowDownFIcon'
import BURIcon from '../../assets/images/SVGIconComponents/BURIcon'
import AmplifierIcon from '../../assets/images/SVGIconComponents/AmplifierIcon'
import MatrixIcon from '../../assets/images/SVGIconComponents/MatrixIcon'
import ClockIcon from '../../assets/images/SVGIconComponents/ClockIcon'
import TestTranslyatorIcon from '../../assets/images/SVGIconComponents/TestTranslyatorIcon'
import ProtocolIcon from '../../assets/images/SVGIconComponents/ProtocolIcon'
import BellIcon from '../../assets/images/SVGIconComponents/BellIcon'
import GearIcon from '../../assets/images/SVGIconComponents/GearIcon'
import LocalNetworkIcon from '../../assets/images/SVGIconComponents/LocalNetworkIcon'
import BVOIcon from '../../assets/images/SVGIconComponents/BVOIcon'
import SKUIcon from '../../assets/images/SVGIconComponents/SKUIcon'
import HelpIcon from '../../assets/images/SVGIconComponents/HelpIcon'

export default {
  name: 'NavMenuComponent',
  data () {
    return {}
  },
  components: {
    HelpIcon,
    SKUIcon,
    BVOIcon,
    LocalNetworkIcon,
    GearIcon,
    BellIcon,
    ProtocolIcon,
    TestTranslyatorIcon,
    ClockIcon,
    MatrixIcon,
    AmplifierIcon,
    BURIcon,
    ArrowDownFIcon,
    ArrowUpFIcon,
    CortexWallIcon,
    TelemetriaImitationIcon,
    HummerIcon,
    CortexIcon,
    OperabilityIcon,
    AntennaIcon,
    ConfigurationIcon,
    CycklogrammiIcon,
    TelemetriaIcon,
    MenuItemComponent,
    PCIcon
  },
  methods: {
    dialogOpen (name) {
      this.$store.dispatch('dialogStatus/' + name, true)
    }
  }
}
</script>

<style scoped>
.nav-menu-container {
  color: var(--main-color);
  width: 80%;
  position: relative;
  background: linear-gradient(180deg, #f6f1f5 0%, #fcf7fb 100%);
  display: flex;
  justify-content: flex-start;
}

.setting-item {
  transition: all .2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin: 0.6vmax;
  padding: 0.3vmax;
  font-size: .8em;
  user-select: none;
}

.setting-item:hover {
  transform: scale(1.1);
  background: white;
  border-radius: 7px;
  box-shadow: 0px 0px 20px -3px rgba(148, 148, 148, 0.71);
}

.item-icon {
  height: 2.5vmax;
  width: 2.5vmax;
  fill: #285876;

}

.item-title {
  margin-top: .5vmax;
}
</style>
