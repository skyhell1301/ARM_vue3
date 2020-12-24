<template>
  <div class="device-container">
    <svg id="line-container-id" class="line-container" height="100%" width="100%">
      <rect width="100%" height="100%" fill="url(#grid)"></rect>
      <connection-line-component id_1="antenna-system-id"
                                 :connection-point_1="{side: 'left', percent: 5}"
                                 id_2="switch-id-1"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineAntennaSystemToSwitch1"
      >
      </connection-line-component>
      <connection-line-component id_1="antenna-system-id"
                                 :connection-point_1="{side: 'left', percent: 20}"
                                 id_2="switch-id-2"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineAntennaSystemToSwitch2"
      >
      </connection-line-component>
      <connection-line-component id_1="test-translyator-id"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="switch-id-1"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineTestTranslyatorToSwitch1"
                                 :active-animation="test"
                                 :animation-duration="1.5"
                                 @onComplete="continueAnimation('switch_1')"
                                 ref="TestTranslyatorToSwitch_1Line"
      >
      </connection-line-component>
      <connection-line-component id_1="test-translyator-id"
                                 :connection-point_1="{side: 'right', percent: 50}"
                                 id_2="switch-id-2"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineTestTranslyatorToSwitch2"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-1"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="amplifier-device-1-id"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM1"
                                 :animation-duration="1.5"
                                 ref="switch_1ToAmplifier_1Line"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-1"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="amplifier-device-2-id"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM2"
                                 :animation-duration="1.5"
                                 ref="switch_1ToAmplifier_2Line"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-2"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="MSHU-device-id-1"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM1"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-2"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="MSHU-device-id-2"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM2"
      >
      </connection-line-component>
      <connection-line-component id_1="amplifier-device-1-id"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-3"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineUM1ToSwitch3"
      >
      </connection-line-component>
      <connection-line-component id_1="amplifier-device-2-id"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-3"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineUM2ToSwitch3"
      >
      </connection-line-component>
      <connection-line-component id_1="MSHU-device-id-1"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-4"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineUM1ToSwitch3"
      >
      </connection-line-component>
      <connection-line-component id_1="MSHU-device-id-2"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-4"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineUM2ToSwitch3"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-3"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="up-converter-id-1"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM1"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-3"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="up-converter-id-2"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM2"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-4"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="down-converter-id-1"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM1"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-4"
                                 :connection-point_1="{side: 'left', percent: 50}"
                                 id_2="down-converter-id-2"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineSwitch1ToUM2"
      >
      </connection-line-component>
      <connection-line-component id_1="up-converter-id-1"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-5"
                                 :connection-point_2="{side: 'left', percent: 50}"
                                 :point-edges-array="lineUpConvertor1ToSwitch5"
      >
      </connection-line-component>
      <connection-line-component id_1="up-converter-id-2"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-5"
                                 :connection-point_2="{side: 'right', percent: 50}"
                                 :point-edges-array="lineUpConvertor1ToSwitch5"
      >
      </connection-line-component>
      <connection-line-component id_1="down-converter-id-1"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-6"
                                 :connection-point_2="{side: 'right', percent: 50}"
                                 :point-edges-array="lineUpConvertor1ToSwitch5"
      >
      </connection-line-component>
      <connection-line-component id_1="down-converter-id-2"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="switch-id-6"
                                 :connection-point_2="{side: 'right', percent: 50}"
                                 :point-edges-array="lineUpConvertor1ToSwitch5"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-5"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="up-matrix-id"
                                 :connection-point_2="{side: 'left', percent: 50}"
                                 :point-edges-array="lineUpConvertor1ToSwitch5"
      >
      </connection-line-component>
      <connection-line-component id_1="switch-id-6"
                                 :connection-point_1="{side: 'bottom', percent: 50}"
                                 id_2="down-matrix-id"
                                 :connection-point_2="{side: 'bottom', percent: 80}"
                                 :point-edges-array="lineSwitch6ToDownMatrix"
      >
      </connection-line-component>
      <connection-line-component id_1="up-matrix-id"
                                 :connection-point_1="{side: 'bottom', percent: 20}"
                                 id_2="cortex-id-1"
                                 :connection-point_2="{side: 'top', percent: 35}"
                                 :point-edges-array="lineUpMatrixToCortex1"
      >
      </connection-line-component>
      <connection-line-component id_1="up-matrix-id"
                                 :connection-point_1="{side: 'bottom', percent: 80}"
                                 id_2="cortex-id-2"
                                 :connection-point_2="{side: 'top', percent: 35}"
                                 :point-edges-array="lineUpMatrixToCortex2"
      >
      </connection-line-component>
      <connection-line-component id_1="down-matrix-id"
                                 :connection-point_1="{side: 'left', percent: 45}"
                                 id_2="cortex-id-1"
                                 :connection-point_2="{side: 'top', percent: 65}"
                                 :point-edges-array="lineDownMatrixToCortex1"
      >
      </connection-line-component>
      <connection-line-component id_1="down-matrix-id"
                                 :connection-point_1="{side: 'left', percent: 55}"
                                 id_2="cortex-id-2"
                                 :connection-point_2="{side: 'top', percent: 65}"
                                 :point-edges-array="lineDownMatrixToCortex2"
      >
      </connection-line-component>
      <connection-line-component id_1="down-matrix-id"
                                 :connection-point_1="{side: 'left', percent: 65}"
                                 id_2="spectrum-analyzer-id"
                                 :connection-point_2="{side: 'top', percent: 50}"
                                 :point-edges-array="lineDownMatrixToSpectrumAnalyser"
      >
      </connection-line-component>
      <connection-line-component id_1="down-matrix-id"
                                 :connection-point_1="{side: 'left', percent: 75}"
                                 id_2="as-stoyka-id"
                                 :connection-point_2="{side: 'bottom', percent: 50}"
                                 :point-edges-array="lineDownMatrixToASStoyka"
      >
      </connection-line-component>
      <connection-line-component id_1="down-matrix-id"
                                 :connection-point_1="{side: 'left', percent: 35}"
                                 id_2="down-matrix-id"
                                 :connection-point_2="{side: 'bottom', percent: 35}"
                                 :point-edges-array="lineDownMatrixToDownMatrix"
      >
      </connection-line-component>
      <defs>
        <pattern id="grid" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(0)">
          <line x1="0" y1="0" x2="10" y2="0" stroke="#ccc"/>
          <line x1="0" y1="0" x2="0" y2="10" stroke="#ccc"/>
        </pattern>
      </defs>
    </svg>
    <DeviceDisplayComponent id="antenna-system-id" title-device="АНТЕННАЯ СИСТЕМА" class="antenna-system-device" :connection-interface-active="false" @dblclick="antennaDialogOpen">
      <DisplayParametersComponent :device-data="antennaDeviceData"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="test-translyator-id" title-device="ТЕСТ-ТРАНСЛЯТОР" class="test-translyator-device">
      <DisplayParametersComponent :device-data="testTranslyatorDeviceData">
        <button style="height: 60%; width: 60%; align-self: center; justify-self: center; font-size: .9em" @click="continueAnimation('TestTranslyatorToSwitch_1Line')">Анимация</button>
      </DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="amplifier-device-1-id" title-device="УМ #1" class="amplifier-device-1">
      <DisplayParametersComponent :device-data="amplifier1DeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="amplifier-device-2-id" title-device="УМ #2" class="amplifier-device-2">
      <DisplayParametersComponent :device-data="amplifier1DeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="MSHU-device-id-1" title-device="МШУ #1" class="MSHU-device-1">
      <DisplayParametersComponent :device-data="MSHUDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="MSHU-device-id-2" title-device="МШУ #2" class="MSHU-device-2">
      <DisplayParametersComponent :device-data="MSHUDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="up-converter-id-1" title-device="КОНВЕРТЕР ВВЕРХ #1" class="up-converter-1">
      <DisplayParametersComponent :device-data="upConverterDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="up-converter-id-2" title-device="КОНВЕРТЕР ВВЕРХ #2" class="up-converter-2">
      <DisplayParametersComponent :device-data="upConverterDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="down-converter-id-1" title-device="КОНВЕРТЕР ВНИЗ #1" class="down-converter-1">
      <DisplayParametersComponent :device-data="downConverterDeviceData1"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="down-converter-id-2" title-device="КОНВЕРТЕР ВНИЗ #2" class="down-converter-2">
      <DisplayParametersComponent :device-data="downConverterDeviceData2"></DisplayParametersComponent>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="up-matrix-id" title-device="Матрица 8х8 вверх" class="up-matrix">
      <div style="height: 100px; width: 100%"></div>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="down-matrix-id" title-device="Матрица 8х8 вниз" class="down-matrix">
      <div style="height: 100px; width: 100%"></div>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="cortex-id-1" title-device="Cortex #1" class="cortex-1">
      <div style="height: 100px; width: 100%"></div>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="cortex-id-2" title-device="Cortex #2" class="cortex-2">
      <div style="height: 100px; width: 100%"></div>
    </DeviceDisplayComponent>
    <DeviceDisplayComponent id="spectrum-analyzer-id" title-device="Анализатор спектра" class="spectrum-analyzer">
      <SpectrumAnalyserDisplayComponent/>
    </DeviceDisplayComponent>
    <StandAntannaSystemComponent id="as-stoyka-id" class="as-stoyka"></StandAntannaSystemComponent>
    <SwitchComponent id="switch-id-1" class="switch-1"
                     @onComplete="continueAnimation('switch_1ToAmplifier_1Line')"
                     ref="switch_1"
                     :animation-duration="0.5"
    >
    </SwitchComponent>
    <SwitchComponent id="switch-id-2" class="switch-2"
                     ref="switch_2"
    >
    </SwitchComponent>
    <SwitchComponent id="switch-id-3" class="switch-3"
                     ref="switch_3"
    >
    </SwitchComponent>
    <SwitchComponent id="switch-id-4" class="switch-4"
                     ref="switch_4"
    >
    </SwitchComponent>
    <SwitchComponent id="switch-id-5" class="switch-5"
                     ref="switch_5"
    >
    </SwitchComponent>
    <SwitchComponent id="switch-id-6" class="switch-6"
                     ref="switch_6"
    >
    </SwitchComponent>
    <GroundComponent class="ground-component-1"></GroundComponent>
    <GroundComponent class="ground-component-2"></GroundComponent>
    <GroundComponent class="ground-component-3"></GroundComponent>
    <GroundComponent class="ground-component-4"></GroundComponent>
    <GroundComponent class="ground-component-5" :rotate-angle="180"></GroundComponent>
    <GroundComponent class="ground-component-6" :rotate-angle="180"></GroundComponent>
  </div>
</template>

<script>
import DeviceDisplayComponent from './DeviceDisplayComponent'
import ConnectionLineComponent from './ConnectionLineComponent'
import DisplayParametersComponent from './DisplayParametersComponent'
import SwitchComponent from './SwitchComponent'
import GroundComponent from './GroundComponent'
import SpectrumAnalyserDisplayComponent from './SpectrumAnalyserDisplayComponent'
import StandAntannaSystemComponent from './StandAntannaSystemComponent'

export default {
  name: 'ContainerDeviceComponent',
  data () {
    return {
      inputValue: '',
      test: false,
      antennaDeviceData: {
        deviceParameters: [
          {
            nameParameter: 'Сигнал',
            valueParameter: '100 дБ'
          },
          {
            nameParameter: 'Азимут',
            valueParameter: '100град'
          },
          {
            nameParameter: 'Угол места',
            valueParameter: '45 град'
          },
          {
            nameParameter: 'Сканер',
            valueParameter: 'Вкл'
          },
          {
            nameParameter: 'Режим',
            valueParameter: 'Автомат'
          }],
        title: 'АНТЕННАЯ СИСТЕМА'
      },
      lineAntennaSystemToSwitch1: [
        {
          direction: 'left',
          isArc: false,
          value: 100
        }
      ],
      lineAntennaSystemToSwitch2: [
        {
          direction: 'left',
          isArc: false,
          value: 100
        }
      ],
      lineTestTranslyatorToSwitch1: [
        {
          direction: 'left',
          isArc: false,
          value: 100
        }
      ],
      lineTestTranslyatorToSwitch2: [
        {
          direction: 'right',
          isArc: false,
          value: 100
        }
      ],
      lineSwitch1ToUM1: [
        {
          direction: 'left',
          isArc: false,
          value: 100
        }
      ],
      lineSwitch1ToUM2: [
        {
          direction: 'right',
          isArc: false,
          value: 100
        },
        {
          direction: 'down',
          isArc: false,
          value: 100
        }
      ],
      lineUM1ToSwitch3: [
        {
          direction: 'down',
          isArc: false,
          value: 50
        },
        {
          direction: 'right',
          isArc: false,
          value: 100
        }
      ],
      lineUM2ToSwitch3: [
        {
          direction: 'down',
          isArc: false,
          value: 50
        },
        {
          direction: 'left',
          isArc: false,
          value: 100
        }
      ],
      lineUpConvertor1ToSwitch5: [
        {
          direction: 'down',
          isArc: false,
          value: 100
        }
      ],
      lineSwitch6ToDownMatrix: [
        {
          direction: 'down',
          isArc: false,
          value: 105
        },
        {
          direction: 'left',
          isArc: false,
          value: 100
        },
        {
          direction: 'up',
          isArc: false,
          value: 5
        }
      ],
      lineUpMatrixToCortex1: [
        {
          direction: 'down',
          isArc: false,
          value: 30
        },
        {
          direction: 'left',
          isArc: false,
          value: 100
        },
        {
          direction: 'down',
          isArc: false,
          value: 70
        }
      ],
      lineUpMatrixToCortex2: [
        {
          direction: 'down',
          isArc: false,
          value: 30
        },
        {
          direction: 'right',
          isArc: false,
          value: 44
        },
        {
          direction: 'right',
          isArc: true,
          value: 11
        },
        {
          direction: 'right',
          isArc: false,
          value: 45
        }
      ],
      lineDownMatrixToCortex1: [
        {
          direction: 'left',
          isArc: false,
          value: 18
        },
        {
          direction: 'left',
          isArc: true,
          value: 3
        },
        {
          direction: 'left',
          isArc: false,
          value: 19
        },
        {
          direction: 'down',
          isArc: false,
          value: 85
        },
        {
          direction: 'left',
          isArc: false,
          value: 60
        },
        {
          direction: 'down',
          isArc: false,
          value: 15
        }
      ],
      lineDownMatrixToCortex2: [
        {
          direction: 'left',
          isArc: false,
          value: 300
        },
        {
          direction: 'down',
          isArc: false,
          value: 90
        },
        {
          direction: 'right',
          isArc: false,
          value: 400
        }
      ],
      lineDownMatrixToSpectrumAnalyser: [
        {
          direction: 'left',
          isArc: false,
          value: 12
        },
        {
          direction: 'down',
          isArc: false,
          value: 76
        },
        {
          direction: 'right',
          isArc: false,
          value: 112
        }
      ],
      lineDownMatrixToASStoyka: [
        {
          direction: 'left',
          isArc: false,
          value: 5.5
        },
        {
          direction: 'down',
          isArc: false,
          value: 260
        },
        {
          direction: 'right',
          isArc: false,
          value: 105.5
        }
      ],
      lineDownMatrixToDownMatrix: [
        {
          direction: 'left',
          isArc: false,
          value: 150
        },
        {
          direction: 'down',
          isArc: false,
          value: 107
        },
        {
          direction: 'right',
          isArc: false,
          value: 32
        },
        {
          direction: 'right',
          isArc: true,
          value: 20
        },
        {
          direction: 'right',
          isArc: false,
          value: 18
        },
        {
          direction: 'right',
          isArc: true,
          value: 20
        },
        {
          direction: 'right',
          isArc: false,
          value: 18
        },
        {
          direction: 'right',
          isArc: true,
          value: 20
        },
        {
          direction: 'right',
          isArc: false,
          value: 122
        }
      ],
      testTranslyatorDeviceData: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '20'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '1'
          }],
        title: 'ТЕСТ-ТРАНСЛЯТОР'
      },
      amplifier1DeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Режим',
            valueParameter: 'Токовый'
          },
          {
            nameParameter: 'Вых. мощность (Вт)',
            valueParameter: '120'
          },
          {
            nameParameter: 'Запрет несущей',
            valueParameter: 'Нет'
          },
          {
            nameParameter: 't °C(вх,вых Δ)',
            valueParameter: '67'
          }],
        title: 'УМ #1'
      },
      amplifier1DeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Режим',
            valueParameter: 'Ключевой'
          },
          {
            nameParameter: 'Вых. мощность (Вт)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Запрет несущей',
            valueParameter: 'Есть'
          },
          {
            nameParameter: 't °C(вх,вых Δ)',
            valueParameter: '75'
          }],
        title: 'УМ #2'
      },
      MSHUDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Значение тока (мА)',
            valueParameter: '100'
          },
          {
            nameParameter: 'Пределы тока (мА)',
            valueParameter: '1000'
          },
          {
            nameParameter: 'Напряжение A (В)',
            valueParameter: '220'
          },
          {
            nameParameter: 'Напряжение B (В)',
            valueParameter: '200'
          }],
        title: 'МШУ #1'
      },
      MSHUDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Значение тока (мА)',
            valueParameter: '200'
          },
          {
            nameParameter: 'Пределы тока (мА)',
            valueParameter: '2000'
          },
          {
            nameParameter: 'Напряжение A (В)',
            valueParameter: '226'
          },
          {
            nameParameter: 'Напряжение B (В)',
            valueParameter: '213'
          }],
        title: 'МШУ #2'
      },
      upConverterDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '200'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '25'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '2'
          }],
        title: 'КОНВЕРТЕР ВВЕРХ #1'
      },
      upConverterDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '300'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '15'
          },
          {
            nameParameter: 'ВЧ выход',
            valueParameter: '1'
          }],
        title: 'КОНВЕРТЕР ВВЕРХ #2'
      },
      downConverterDeviceData1: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '450'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '15'
          }],
        title: 'КОНВЕРТЕР ВНИЗ #1'
      },
      downConverterDeviceData2: {
        deviceParameters: [
          {
            nameParameter: 'Частота (МГц)',
            valueParameter: '300'
          },
          {
            nameParameter: 'Ослабление (дБ)',
            valueParameter: '7'
          }],
        title: 'КОНВЕРТЕР ВНИЗ #1'
      },
      nodes: '',
      template: ''
    }
  },
  components: {
    StandAntannaSystemComponent,
    SpectrumAnalyserDisplayComponent,
    GroundComponent,
    DeviceDisplayComponent,
    ConnectionLineComponent,
    DisplayParametersComponent,
    SwitchComponent
  },
  methods: {
    continueAnimation (ref) {
      this.$refs[ref].startAnimation()
    },
    getWebSocketData () {
      let context = this
      // Create a new WebSocket.
      let socket = new WebSocket('ws://10.10.0.16:8080')
      socket.onmessage = function (e) {
        let text = JSON.parse(e.data)
        if (text.DeviceParameters !== null && text.DeviceParameters !== undefined) {
          context.inputValue = text.DeviceParameters
          if (context.inputValue.antennaDeviceData !== null && context.inputValue.antennaDeviceData !== undefined) {
            context.antennaDeviceData = context.inputValue.antennaDeviceData
          }
          if (context.inputValue.testTranslyatorDeviceData !== null && context.inputValue.testTranslyatorDeviceData !== undefined) {
            context.testTranslyatorDeviceData = context.inputValue.testTranslyatorDeviceData
          }
          if (context.inputValue.amplifier1DeviceData1 !== null && context.inputValue.amplifier1DeviceData1 !== undefined) {
            context.amplifier1DeviceData1 = context.inputValue.amplifier1DeviceData1
          }
          if (context.inputValue.amplifier1DeviceData2 !== null && context.inputValue.amplifier1DeviceData2 !== undefined) {
            context.amplifier1DeviceData2 = context.inputValue.amplifier1DeviceData2
          }
          if (context.inputValue.MSHUDeviceData1 !== null && context.inputValue.MSHUDeviceData1 !== undefined) {
            context.MSHUDeviceData1 = context.inputValue.MSHUDeviceData1
          }
          if (context.inputValue.MSHUDeviceData2 !== null && context.inputValue.MSHUDeviceData2 !== undefined) {
            context.MSHUDeviceData2 = context.inputValue.MSHUDeviceData2
          }
          if (context.inputValue.upConverterDeviceData1 !== null && context.inputValue.upConverterDeviceData1 !== undefined) {
            context.upConverterDeviceData1 = context.inputValue.upConverterDeviceData1
          }
          if (context.inputValue.upConverterDeviceData2 !== null && context.inputValue.upConverterDeviceData2 !== undefined) {
            context.upConverterDeviceData2 = context.inputValue.upConverterDeviceData2
          }
          if (context.inputValue.downConverterDeviceData1 !== null && context.inputValue.downConverterDeviceData1 !== undefined) {
            context.downConverterDeviceData1 = context.inputValue.downConverterDeviceData1
          }
          if (context.inputValue.downConverterDeviceData2 !== null && context.inputValue.downConverterDeviceData2 !== undefined) {
            context.downConverterDeviceData2 = context.inputValue.downConverterDeviceData2
          }
        }
        this.inputValue = JSON.parse(e.data)
      }
    },
    antennaDialogOpen () {
      this.$store.commit('changeAntennaSystemStatus', !this.$store.state.antennaSystemStatus)
    }
  },
  mounted () {
    this.getWebSocketData()
  }
}
</script>

<style scoped>
.device-container {
  z-index: 1;
  border: 1px solid black;
  display: grid;
  grid-template-rows: 15% 5% 15% 10% 15% 3% 12% 5% 20%;
  grid-template-columns: 22% 6% 22% 22% 6% 22%;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
}
.line-container {
  z-index: -1;
  will-change: transform;
  grid-row-start: 1;
  grid-row-end: 10;
  grid-column-start: 1;
  grid-column-end: 8;
 }
.antenna-system-device {
  grid-column: 6;
  grid-row: 1;
  width: 90%;
  height: 90%;
  align-self: start;
}
.test-translyator-device {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 1;
  width: 50%;
  height: 90%;
  align-self: end;
}
.amplifier-device-1 {
  grid-column: 1;
  grid-row: 3;
  width: 90%;
  height: 100%;
}
.amplifier-device-2 {
  grid-column: 3;
  grid-row: 3;
  width: 90%;
  height: 100%;
}
.MSHU-device-1 {
  grid-column: 4;
  grid-row: 3;
  width: 90%;
  height: 100%;
}
.MSHU-device-2 {
  grid-column: 6;
  grid-row: 3;
  width: 90%;
  height: 100%;
}
.up-converter-1 {
  grid-column: 1;
  grid-row: 5;
  width: 80%;
  height: 100%;
}
.up-converter-2 {
  grid-column: 3;
  grid-row: 5;
  width: 80%;
  height: 100%;
}
.down-converter-1 {
  grid-column: 4;
  grid-row: 5;
  width: 80%;
  height: 100%;
}
.down-converter-2 {
  grid-column: 6;
  grid-row: 5;
  width: 80%;
  height: 100%;
}
.up-matrix {
  grid-column: 3;
  grid-row: 7;
  height: 100%;
  width: 60%;
  justify-self: start;
  align-self: start;
}
.down-matrix {
  grid-column: 4;
  grid-row: 7;
  height: 100%;
  width: 60%;
  justify-self: end;
  align-self: start;
}
.cortex-1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 9;
  height: 95%;
  width: 66%;
  margin-left: 3%;
  justify-self: start;
  align-self: start;
}
.cortex-2 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 9;
  height: 95%;
  width: 75%;
  justify-self: end;
  align-self: start;
}
.spectrum-analyzer {
  grid-column-start: 5;
  grid-column-end: 8;
  grid-row: 9;
  height: 70%;
  width: 75%;
  justify-self: center;
  align-self: start;
}
.as-stoyka {
  grid-column: 6;
  grid-row: 7;
  height: 80%;
  width: 45%;
  align-self: start;
  justify-self: start;
  margin-left: 13%;
  margin-top: 3%;
}

.switch-1{
  grid-column: 2;
  grid-row: 2;
  align-self: end;
  height: 30px;
  width: 30px;
}
.switch-2{
  grid-column: 5;
  grid-row: 2;
  align-self: end;
  width: 30px;
  height: 30px;
}
.switch-3{
  grid-column: 2;
  grid-row: 4;
  width: 30px;
  height: 30px;
  align-self: end;
}
.switch-4{
  grid-column: 5;
  grid-row: 4;
  width: 30px;
  height: 30px;
  align-self: end;
}
.switch-5{
  grid-column: 2;
  grid-row: 6;
  width: 30px;
  height: 30px;
  align-self: start;
}
.switch-6{
  grid-column: 5;
  grid-row: 6;
  width: 30px;
  height: 30px;
  align-self: start;
}
.ground-component-1 {
  grid-column: 2;
  grid-row: 3;
  align-self: start;
  width: 30px;
}
.ground-component-2 {
  grid-column: 5;
  grid-row: 3;
  align-self: start;
  width: 30px;
}
.ground-component-3 {
  grid-column: 2;
  grid-row: 5;
  align-self: start;
  width: 30px;
}
.ground-component-4 {
  grid-column: 5;
  grid-row: 5;
  align-self: start;
  width: 30px;
}
.ground-component-5 {
  grid-column: 2;
  grid-row: 5;
  align-self: end;
  width: 30px;
}
.ground-component-6 {
  grid-column: 5;
  grid-row: 5;
  align-self: end;
  width: 30px;
}

</style>
