const state = ()=> ({
    allParameters: null,
    antennaParameters1: null,
    antennaParameters2: null,
    amplifier1DeviceParameters1: null,
    amplifier1DeviceParameters2: null,
    MSHUDeviceParameters1: null,
    MSHUDeviceParameters2: null,
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
        state.amplifier1DeviceParameters1 = payload.amplifier1DeviceData1
        state.amplifier1DeviceParameters2 = payload.amplifier1DeviceData2
        state.MSHUDeviceParameters1 = payload.MSHUDeviceData1
        state.MSHUDeviceParameters2 = payload.MSHUDeviceData2
        state.downConverterDeviceParameters1 = payload.downConverterDeviceData1
        state.downConverterDeviceParameters2 = payload.downConverterDeviceData2
        state.testTranslyatorDeviceParameters = payload.testTranslyatorDeviceData
        state.upConverterDeviceParameters1 = payload.upConverterDeviceData1
        state.upConverterDeviceParameters2 = payload.upConverterDeviceData2
    }
}
const getters = {
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
