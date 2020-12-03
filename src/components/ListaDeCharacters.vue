<template>
  <b-row>
    <h1 style="padding: 20px">Lista de Cards MAGIC THE GATHERING</h1>

    <b-row>
      <b-card-group deck>
        <b-card
          v-for="c in allCharacters"
          :key="c.number"
          style="min-width: 20rem; max-width: 20rem; margin: 12px"
          border-variant="primary"
          :header="c.name"
          header-bg-variant="dark"
          header-text-variant="white"
          align="center"
        >
        <img :src="c.imageUrl" :alt="c.name">
          <!--Aqui digo que, clicando no conteúdo do 'b-card-text', eu vou para (to) 'detalharCard'-->
          <router-link
            :to="{ name: 'detalharCard', params: { number: c.number, card: c } }"
          >
            <b-button style="margin: 10px;" variant="dark">More info</b-button>
          </router-link>
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
  
  methods: mapActions(["getCharacters"]),

  //chamar o método para, assim que abrir a página, a requisição ser feita
  created() {
    this.getCharacters();
  },
};
</script>

<style>
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
</style>