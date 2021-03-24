const state = () => ({
    cyclogrammsList: null,
    cyclogrammsListStatus: false
})
const mutations = {
    updateCyclogrammsList(state, payload) {
        state.cyclogrammsList = payload?.list
        state.cyclogrammsListStatus = true
    },
    changeCyclogrammsListStatus(state, payload) {
        state.cyclogrammsListStatus = payload
    },
}

const getters = {}

const actions = {
    updateCyclogrammsList({commit}, payload) {
        commit('updateCyclogrammsList', payload)
    },
    changeCyclogrammsListStatus({commit}, payload) {
        commit('changeCyclogrammsListStatus', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
