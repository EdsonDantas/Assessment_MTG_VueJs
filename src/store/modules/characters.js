import axios from 'axios'

const state = {
    characters: []

};

const getters = {
    //esse é meu mapGetters, que olha pro meu state e me retorna a lista de Cartas/Personagens. 
    allCharacters: state => state.characters
}

const actions = {
    getCharacters({ commit }) {
        axios.get(
            'https://api.magicthegathering.io/v1/cards?page=7>; rel="last"'
        ).then((response) => {
            commit('getCharacters', response.data)
        })
    }
}

const mutations = {
    getCharacters: (state, data) => (state.characters = data.cards),
}

export default {
    state,
    getters,
    actions,
    mutations
};

