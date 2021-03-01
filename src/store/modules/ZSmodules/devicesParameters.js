const state = () => ({
    parameters: null,
    unitsConfiguration: null
})
const mutations = {
    parametersUpdate(state, payload) {
        if (payload !== '') {
            state.parameters = payload
        }
    },
    unitsConfigurationUpdate(state, payload) {
        state.unitsConfiguration = payload

    },
}
const getters = {
    LNAParameters: state => number => {
        let params = {deviceParameters: {}}
        let LNAData = state.parameters?.MSHUDeviceData?.deviceParameters
        if (LNAData?.Amplifiers) {
            for (let item in LNAData.Amplifiers[number]) {
                params.deviceParameters[item] = LNAData.Amplifiers[number][item]
                params.deviceParameters[item].id = number
            }
        }
        return updateUnitsFromParameters(state, {'MSHUDevice': params})
    },
    antennaParameters: state => {
        return updateUnitsFromParameters(state, {'AntennaSystem': state.parameters?.AntennaSystem})
    },
    amplifierParameters1: state => {
        return updateUnitsFromParameters(state, {'Amplifier': state.parameters?.amplifierDeviceData[1]})
    },
    amplifierParameters2: state => {
        return updateUnitsFromParameters(state, {'Amplifier': state.parameters?.amplifierDeviceData[2]})
    },
    downConverterParameters1: state => {
        return updateUnitsFromParameters(state, {'DownConverter': state.parameters?.downConverterDeviceData[1]})
    },
    downConverterParameters2: state => {
        return updateUnitsFromParameters(state, {'DownConverter': state.parameters?.downConverterDeviceData[2]})
    },
    testTranslyatorParameters: state => {
        return updateUnitsFromParameters(state, {'Ttranslator': state.parameters?.testTranslyatorDeviceData})
    },
    upConverterParameters1: state => {
        return updateUnitsFromParameters(state, {'UpConverter': state.parameters?.upConverterDeviceData[1]})
    },
    upConverterParameters2: state => {
        return updateUnitsFromParameters(state, {'UpConverter': state.parameters?.upConverterDeviceData[2]})
    },
}

const actions = {
    parametersUpdate({commit}, payload) {
        commit('parametersUpdate', payload)
    },
    unitsConfigurationUpdate({commit}, payload) {
        commit('unitsConfigurationUpdate', payload)
    },
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
