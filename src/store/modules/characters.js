import axios from 'axios'

const state = {
    characters: []

};

const getters = {
    //esse é meu mapGetters, que olha pro minha variável 'state' e me retorna a lista de Cartas/Personagens. 
    allCharacters: state => state.characters
}

const actions = {

    getCharacters({ commit }) {
        //raz requisição e dá commit no mutation. usar page 7-9,100
        axios.get(
            'https://api.magicthegathering.io/v1/cards?page=80>; rel="last"'
        ).then((response) => {
            commit('getCharacters', response.data)
        });
    },

    deleteCard({commit}, number){
        commit('deleteCard', number)
    },
}

//modifica o meu state
const mutations = {
    //mutation pega as informações  e escreva lá na minha lista que estava vazia.
    //precisei adicionar o cards no 'data.cards', pq minha requisição me retornava um objeto com uma lista gigante. 
    getCharacters: (state, data) => (state.characters = data.cards),

    //minha lista de usuários recebe minha lista de usuários menos o usuário com o 'number' selecionado no click
    deleteCard: (state, number) => (state.characters = state.characters.filter(c => c.number !== number))
}

export default {
    state,
    getters,
    actions,
    mutations
};

