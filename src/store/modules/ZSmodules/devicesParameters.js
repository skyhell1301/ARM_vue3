const state = ()=> ({
    antennaParameters1: {},
    antennaParameters2: {},
    amplifier1DeviceParameters1: {},
    amplifier1DeviceParameters2: {},
    MSHUDeviceParameters: {},
    downConverterDeviceParameters1: {},
    downConverterDeviceParameters2: {},
    testTranslyatorDeviceParameters: {},
    upConverterDeviceParameters1: {},
    upConverterDeviceParameters2: {},
})
const mutations = {
    parametersUpdate(state, payload) {
        state.antennaParameters1 = payload.antennaDeviceDataById[1]
        state.antennaParameters2 = payload.antennaDeviceDataById[2]
        state.amplifier1DeviceParameters1 = payload.amplifierDeviceData[1]
        state.amplifier1DeviceParameters2 = payload.amplifierDeviceData[2]
        state.MSHUDeviceParameters = payload.MSHUDeviceData
        state.downConverterDeviceParameters1 = payload.downConverterDeviceData[20]
        state.downConverterDeviceParameters2 = payload.downConverterDeviceData[21]
        state.testTranslyatorDeviceParameters = payload.testTranslyatorDeviceData
        state.upConverterDeviceParameters1 = payload.upConverterDeviceData[10]
        state.upConverterDeviceParameters2 = payload.upConverterDeviceData[11]
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
