const state = ()=> ({
    allParameters: null,
    antennaParameters1: null,
    antennaParameters2: null,
    amplifier1DeviceParameters1: null,
    amplifier1DeviceParameters2: null,
    MSHUDeviceParameters: null,
    downConverterDeviceParameters1: null,
    downConverterDeviceParameters2: null,
    testTranslyatorDeviceParameters: null,
    upConverterDeviceParameters1: null,
    upConverterDeviceParameters2: null,
})
const mutations = {
    parametersUpdate(state, payload) {
        state.allParameters = payload

        state.antennaParameters1 = payload.antennaDeviceDataById[1]
        state.antennaParameters2 = payload.antennaDeviceDataById[2]
        state.amplifier1DeviceParameters1 = payload.amplifierDeviceData[1]
        state.amplifier1DeviceParameters2 = payload.amplifierDeviceData[2]
        state.MSHUDeviceParameters = payload.MSHUDeviceData
        state.downConverterDeviceParameters1 = payload.downConverterDeviceData[1]
        state.downConverterDeviceParameters2 = payload.downConverterDeviceData[2]
        state.testTranslyatorDeviceParameters = payload.testTranslyatorDeviceData
        state.upConverterDeviceParameters1 = payload.upConverterDeviceData[1]
        state.upConverterDeviceParameters2 = payload.upConverterDeviceData[2]
    }
}
const getters = {
    MSHUParametersByNumber: state => number => {
        let params = {deviceParameters: {}}
            if(state.MSHUDeviceParameters !== null) {
                for (let item in state.MSHUDeviceParameters.deviceParameters) {
                    if (item === 'Amplifiers') {
                        params.deviceParameters['current'] = state.MSHUDeviceParameters.deviceParameters[item][number].current
                    } else {
                        params.deviceParameters[item] = state.MSHUDeviceParameters.deviceParameters[item]
                    }
                }
            }
        return params

    }
}

const actions = {
    parametersUpdate({commit}, payload) {
        commit('parametersUpdate', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
