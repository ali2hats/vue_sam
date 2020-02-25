import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export const store = new VueX.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2
        }, clickCounter(state) {
            return state.counter
        }
    },
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        }
    },
    actions: {
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('increment', payload.by)
            }, payload.duration);
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            }, payload.duration);
        }
    }
})