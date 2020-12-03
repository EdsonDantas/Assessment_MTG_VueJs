<template>
  <b-row>
    <h1 style="padding: 20px">Lista de Cards MAGIC THE GATHERING</h1>

    <b-row>
      <b-card-group  deck>
        <b-card
          v-for="c in allCharacters"
          :key="c.number"
          style="min-width: 15rem; max-width: 15rem; margin: 12px"
          border-variant="primary"
          :header="c.name"
          header-bg-variant="dark"
          header-text-variant="white"
          align="center"
        >
        <img style="width: 90%;" :src="c.imageUrl" :alt="c.name">
          <!--Aqui digo que, clicando no conteúdo do 'b-button', eu vou para (to) 'detalharCard'-->
          <!--'number: c.number' => passa o number para minha 'rota nomeada'.
           'card: c' => pego os elementos da minha lista pra usar no detalhamento-->
          <router-link
            :to="{ name: 'detalharCard', params: { number: c.number, card: c } }"
          >
            <b-button style="margin: 10px;" variant="dark">Mais info</b-button>
          </router-link>

          <!--Chamando o método para deletar os cards-->
            <b-button @click="deleteCard(c.number)" style="margin: 10px;" variant="danger">Deletar <b-icon icon="trash-fill"></b-icon></b-button>
            
        
          
        </b-card>
      </b-card-group>
    </b-row>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListaDeCharacters",

  computed: mapGetters(["allCharacters"]),

//essas functions estão na pasta .store/modules/characters.js'
  methods: mapActions(["getCharacters", "deleteCard"]),

  //chamar o método para, assim que abrir a página, a requisição ser feita
  created() {
    this.getCharacters();
  },
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  color: rgb(246, 249, 250);
  text-shadow: black 0.1em 0.1em 0.2em
}
b-card-text {
  cursor: pointer;
}

button {
  transform: scale(0.96);
  transition: ease 0.5s;
}

button:hover {
  transform: scale(1.2);
  transition: ease 0.5s;
}
.card {
  display: flex;
  position: relative;
  left: 85px;

}
img {
  transform: scale(0.96);
  transition: ease 0.5s;
}
img:hover {
  transform: scale(1.5);
  transition: ease 0.5s;
}
</style>