<template>
  <b-row class="novo">
    <h2 style="margin-right: 20px; color: white">Adicionar novo card:</h2>

    <b-row style="">
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Name</label>
        <b-form-input
          v-model="name"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Nome do card"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Username</label>
        <b-input-group prepend="Raridade" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-input
            v-model="raridade"
            id="inline-form-input-username"
            placeholder="ex: Uncommon"
          ></b-form-input>
        </b-input-group>

        <b-button @click="addCard()" variant="primary">Save</b-button>
      </b-form>
    </b-row>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdicionarNovo",
  data() {
    return {
      name: "",
      raridade: "",
    };
  },

  methods: {
    ...mapActions(["addCard"]),

    addCard() {
      let novoCard = {
        name: this.name,
        manaCost: "{6}{R}{R}",
        cmc: 8,
        colors: ["Red"],
        colorIdentity: ["R"],
        type: "Creature — Giant",
        types: ["Creature"],
        subtypes: ["Giant"],
        rarity: this.raridade,
        set: "10E",
        setName: "Tenth Edition",
        text:
          "{R}, Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.",
        flavor: "It took all its strength to contain the fire within.",
        artist: "Greg Staples",
        number: "191",
        power: "6",
        toughness: "6",
        imageUrl:
          "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129709&type=card",
      };
      this.addCard(novoCard)
      alert('Adicionado com sucesso total!!!')
    },
  },
};
</script>

<style>
.novo {
  margin-top: 30px;
  margin-left: 40px;
}
</style>