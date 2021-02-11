<template>
  <div class="nav-menu-container">
    <MenuItemComponent title-menu-item="Главное меню">
      <div class="setting-item">
        <TelemetriaIcon class="item-icon"></TelemetriaIcon>
        <div class="item-title">Телеметрия</div>
      </div>
      <div class="setting-item">
        <CycklogrammiIcon class="item-icon"></CycklogrammiIcon>
        <div class="item-title">Циклограммы</div>
      </div>
      <div class="setting-item">
        <ConfigurationIcon class="item-icon"></ConfigurationIcon>
        <div class="item-title">Конфигурация оборудования</div>
      </div>
      <div class="setting-item">
        <OperabilityIcon class="item-icon"></OperabilityIcon>
        <div class="item-title">Работоспособность оборудования</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAntennaSystemDialogStatus')">
        <AntennaIcon class="item-icon"></AntennaIcon>
        <div class="item-title">Антенная система</div>
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
        <div class="item-title">Подготовка Cortex</div>
      </div>
      <div class="setting-item">
        <TelemetriaImitationIcon class="item-icon"></TelemetriaImitationIcon>
        <div class="item-title">Имитация телеметрии</div>
      </div>
      <div class="setting-item">
        <CortexWallIcon class="item-icon"></CortexWallIcon>
        <div class="item-title">Стена Cortex</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent title-menu-item="Оборудование">
      <div class="setting-item">
        <ArrowUpFIcon class="item-icon"></ArrowUpFIcon>
        <div class="item-title">Конвертер вверх 1</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">БУР вверх</div>
      </div>
      <div class="setting-item">
        <ArrowUpFIcon class="item-icon"></ArrowUpFIcon>
        <div class="item-title">Конвертер вверх 2</div>
      </div>
      <div class="setting-item">
        <ArrowDownFIcon class="item-icon"></ArrowDownFIcon>
        <div class="item-title">Конвертер вниз 1</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">БУР вниз</div>
      </div>
      <div class="setting-item">
        <ArrowDownFIcon class="item-icon"></ArrowDownFIcon>
        <div class="item-title">Конвертер вниз 2</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAmplifierDialogStatus')">
        <AmplifierIcon class="item-icon"></AmplifierIcon>
        <div class="item-title">УМ вверх 1</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeAmplifierDialogStatus')">
        <AmplifierIcon class="item-icon"></AmplifierIcon>
        <div class="item-title">УМ вверх 2</div>
      </div>
      <div class="setting-item">
        <MatrixIcon class="item-icon"></MatrixIcon>
        <div class="item-title">Матрица вверх</div>
      </div>
      <div class="setting-item">
        <MatrixIcon class="item-icon" style="transform: rotate(180deg)"></MatrixIcon>
        <div class="item-title">Матрица вниз</div>
      </div>
      <div class="setting-item">
        <BURIcon class="item-icon"></BURIcon>
        <div class="item-title">МШУ</div>
      </div>
      <div class="setting-item">
        <TestTranslyatorIcon class="item-icon"></TestTranslyatorIcon>
        <div class="item-title">Тест - транслятор</div>
      </div>
      <div class="setting-item">
        <ClockIcon class="item-icon"></ClockIcon>
        <div class="item-title">СЕВ</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent title-menu-item="Протоколы">
      <div class="setting-item" @click="dialogOpen('changeProtocolDialogStatus')">
        <ProtocolIcon class="item-icon"></ProtocolIcon>
        <div class="item-title">Протокол</div>
      </div>
      <div class="setting-item">
        <BellIcon class="item-icon"></BellIcon>
        <div class="item-title">Протокол аварийных сообщений</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent title-menu-item="Настройки">
      <div class="setting-item">
        <GearIcon class="item-icon"></GearIcon>
        <div class="item-title">Настройки программы</div>
      </div>
      <div class="setting-item" @click="dialogOpen('changeLVSSettingDialogStatus')">
        <LocalNetworkIcon class="item-icon"></LocalNetworkIcon>
        <div class="item-title">Настройки ЛВС</div>
      </div>
      <div class="setting-item">
        <BVOIcon class="item-icon"></BVOIcon>
        <div class="item-title">БВО</div>
      </div>
    </MenuItemComponent>
    <MenuItemComponent title-menu-item="Помощь">
      <div class="setting-item">
        <SKUIcon class="item-icon"></SKUIcon>
        <div class="item-title">Спецификация</div>
      </div>
      <div class="setting-item">
        <ProtocolIcon class="item-icon"></ProtocolIcon>
        <div class="item-title">Протокол ТСУ</div>
      </div>
      <div class="setting-item">
        <PCIcon class="item-icon"></PCIcon>
        <div class="item-title">Системная информация</div>
      </div>
      <div class="setting-item">
        <HelpIcon class="item-icon"></HelpIcon>
        <div class="item-title">О программе</div>
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
  width: 100%;
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
