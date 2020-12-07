<template>
  <b-row style="width:100%" class="principal">
      
    <b-card style="max-width:90%; margin-top: 20px" :img-src="card.imageUrl" :img-alt="card.name" img-left class="mb-3">
    
      <b-card-text>
          <h4>{{card.name}}</h4>
      </b-card-text>
      <b-card-text> <strong>Artista:</strong> {{card.artist}}</b-card-text>
    <b-card-text> <strong> Texto original: </strong> {{card.originalText}}</b-card-text>
    <b-card-text> <strong> Tipo: </strong> {{card.types[0]}}</b-card-text>
    <b-card-text> <strong> Edição Original: </strong> {{card.set}}</b-card-text>
    <b-card-text> <strong> Raridade: </strong> {{card.rarity}}</b-card-text>
    <b-card-text > <strong> Cores: </strong> {{card.colors[0]}} - <strong> Prints: </strong>{{card.printings.length}}</b-card-text>
    </b-card>
  </b-row>
</template>

<script>
export default {
    name: 'Detalhamento',

    data() {
        return {
          //Puxando o card do meu 'params' passado no componente 'ListaDeCharacters'
            card : this.$route.params.card,
            number: this.$route.params.number
            
        }
    },


}
</script>

<style>
.principal {
  background-image: url('../assets/wallpaper.jpg');
}

.mb-3 {
 background-color: white;
 opacity: 0.8;
}
</style>