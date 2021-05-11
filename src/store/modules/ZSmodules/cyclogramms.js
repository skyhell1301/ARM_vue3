const state = () => ({
    cyclogrammsList: null,
    cyclogrammsListStatus: false
})
const mutations = {
    updateCyclogrammsList(state, payload) {
        state.cyclogrammsList = payload?.list
        state.devicesList = payload?.devlist
        state.cyclogrammsListStatus = true
    },
    updateCommandExecuteStatus(state, payload) {
        for (let idCommand in payload.statuses) {
            state.cyclogrammsList[payload.id].cyclodata.forEach(num => {
                if (num.NumInCicl == idCommand) {
                    num.status = payload.statuses[idCommand]
                }
            })

        }
    },
    changeCyclogrammsListStatus(state, payload) {
        state.cyclogrammsListStatus = payload
    },
    clearStatuses(state) {
        for (let cycloKey in state.cyclogrammsList) {

            for (let command in state.cyclogrammsList[cycloKey].cyclodata) {
                delete state.cyclogrammsList[cycloKey].cyclodata[command].status
            }
        }
    },

}

const getters = {}

const actions = {
    updateCyclogrammsList({commit}, payload) {
        commit('updateCyclogrammsList', payload)
    },
    updateCommandExecuteStatus({commit}, payload) {
        commit('updateCommandExecuteStatus', payload)
    },
    changeCyclogrammsListStatus({commit}, payload) {
        commit('changeCyclogrammsListStatus', payload)
    },
    clearStatuses({commit}) {
        commit('clearStatuses')
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
