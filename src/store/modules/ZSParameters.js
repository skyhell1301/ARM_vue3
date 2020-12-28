const state = ()=> ({
    allParameters: null,
    antennaParametersById1: null,
    antennaParametersById2: null
})
const mutations = {
    parametersUpdate(state, payload) {
        state.allParameters = payload
        state.antennaParametersById1 = payload.antennaDeviceDataById[1]
        state.antennaParametersById2 = payload.antennaDeviceDataById[2]
        // console.log(state.antennaParametersById2)
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
