const state = ()=> ({
    windowsList: []
})
const mutations = {
    addWindow (state, payload) {
        state.windowsList.push(payload)
    },
    closeWindow (state, payload) {
        let index = null
        for (let i = 0; i < state.windowsList.length; i++) {
            if (state.windowsList[i] === payload) {
                index = i
                break
            }
        }
        if (index === null) {
            return
        }
        state.windowsList.splice(index, 1)
    }
}
const getters = {
}
const actions = {

    addWindow ({commit}, payload) {
        commit('addWindow', payload)
    },
    closeWindow ({commit}, payload) {
        commit('closeWindow', payload)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
