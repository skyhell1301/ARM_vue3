const state = () => ({
    parameters: null,
    unitsConfiguration: null
})
const mutations = {
    parametersUpdate(state, payload) {
        state.parameters = payload
    },
    unitsConfigurationUpdate(state, payload) {
        state.unitsConfiguration = payload

    },
    clearParameters(state) {
        state.parameters = null
    }
}
const getters = {
    LNAParameters: state => number => {
        let params = null
        let LNAData = state.parameters?.MSHUDeviceData?.deviceParameters
        if (LNAData?.Amplifiers) {
            params = {deviceParameters: {}}
            for (let item in LNAData.Amplifiers[number]) {
                params.deviceParameters[item] = LNAData.Amplifiers[number][item]
                params.deviceParameters[item].id = number
            }
        }
        if (params === null) {
            return null
        }
        return updateUnitsFromParameters(state, {'MSHUDevice': params})
    },
    antennaParameters: state => {
        return updateUnitsFromParameters(state, {'AntennaSystem': state.parameters?.AntennaSystem})
    },
    amplifierParameters1: state => {
        return updateUnitsFromParameters(state, {'Amplifier': state.parameters?.amplifierDeviceData ? state.parameters.amplifierDeviceData[1] : undefined})
    },
    amplifierParameters2: state => {
        return updateUnitsFromParameters(state,
            {'Amplifier': state.parameters?.amplifierDeviceData ? state.parameters.amplifierDeviceData[2] : undefined})
    },
    downConverterParameters1: state => {
        return updateUnitsFromParameters(state,
            {'DownConverter':state.parameters?.downConverterDeviceData ? state.parameters.downConverterDeviceData[1] : undefined})
    },
    downConverterParameters2: state => {
        return updateUnitsFromParameters(state,
            {'DownConverter': state.parameters?.downConverterDeviceData ? state.parameters.downConverterDeviceData[2] : undefined})
    },
    testTranslyatorParameters: state => {
        return updateUnitsFromParameters(state, {'Ttranslator': state.parameters?.testTranslyatorDeviceData})
    },
    upConverterParameters1: state => {
        return updateUnitsFromParameters(state,
            {'UpConverter': state.parameters?.upConverterDeviceData ? state.parameters.upConverterDeviceData[1] : undefined})
    },
    upConverterParameters2: state => {
        return updateUnitsFromParameters(state,
            {'UpConverter': state.parameters?.upConverterDeviceData ? state.parameters.upConverterDeviceData[2] : undefined})
    },
    matrixUpParameters: state => {
        return state.parameters?.matrixDeviceData ? state.parameters.matrixDeviceData[1] : undefined
    },
    matrixDownParameters: state => {
        return state.parameters?.matrixDeviceData ? state.parameters.matrixDeviceData[2] : undefined
    },
    convertorRedundancy1: state => {
        if(state.parameters?.convRedundancyData) {
            return state.parameters?.convRedundancyData[1]?.deviceParameters
        } else {
            return undefined
        }
    },
    convertorRedundancy2: state => {
        if(state.parameters?.convRedundancyData) {
            return state.parameters?.convRedundancyData[2]?.deviceParameters
        } else {
            return undefined
        }
    },
    reservedStatusLNA: state => {
        return state.parameters?.MSHUDeviceData?.deviceParameters?.Status.valueParameter === 1
    },
    reservedStatusAmplifier: state => {
        // console.log(state.parameters?.amplifierDeviceData.redundancy.deviceParameters.SwitchStatus.valueParameter)
        return state.parameters?.amplifierDeviceData?.redundancy?.deviceParameters?.SwitchStatus?.valueParameter === 2
    }
}

const actions = {
    parametersUpdate({commit}, payload) {
        commit('parametersUpdate', payload)
    },
    unitsConfigurationUpdate({commit}, payload) {
        commit('unitsConfigurationUpdate', payload)
    },
    clearParameters({commit}) {
        commit('clearParameters')
    }
}

function updateUnitsFromParameters(state, device) {
    let deviceNameKey = Object.keys(device)[0]
    if (state?.unitsConfiguration) {
        for (let parametersKey in device[deviceNameKey]?.deviceParameters) {
            if (deviceNameKey in state.unitsConfiguration) {
                if (parametersKey in state.unitsConfiguration[deviceNameKey]) {
                    let unit = state.unitsConfiguration[deviceNameKey][parametersKey]?.unit
                    let value_list = state.unitsConfiguration[deviceNameKey][parametersKey]?.value_list
                    let pattern = state.unitsConfiguration[deviceNameKey][parametersKey]?.pattern

                    if (unit) {
                        device[deviceNameKey].deviceParameters[parametersKey].unit = unit
                    } else {
                        device[deviceNameKey].deviceParameters[parametersKey].unit = ''
                    }
                    if (value_list) {
                        device[deviceNameKey].deviceParameters[parametersKey].value_list = value_list
                    }
                    if (pattern) {
                        device[deviceNameKey].deviceParameters[parametersKey].pattern = pattern
                    }
                }
            } else {
                device[deviceNameKey].deviceParameters[parametersKey].unit = ''
            }
            device[deviceNameKey].deviceParameters[parametersKey].deviceType = deviceNameKey
            device[deviceNameKey].deviceParameters[parametersKey].nameParameter = parametersKey
        }

    }
    return device[deviceNameKey]
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
