const state = ()=> ({
    lifeMark: null,
})
const mutations = {
    lifeMarkUpdate(state, payload) {
        state.lifeMark = payload
    }
}
const getters = {
}
const actions = {
    lifeMarkUpdate({commit}, payload) {
        commit('lifeMarkUpdate', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
