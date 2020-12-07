<template>
  <b-container>
    <b-row>
        <h2 style="margin-top: 30px">Deixe seu contato por email:</h2>
        <h5>Assim podemos te manter informado sobre as novidades como, novos cards, descks, coleções... </h5>
      <b-form class="formulario" @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Seu Email:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Informe seu email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Seu Nome:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            required
            placeholder="Informe seu nome"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Cor preferida:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.color"
            :options="colors"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="Promoções: Quero receber"
              >Receber promoções</b-form-checkbox
            >
            <b-form-checkbox value="Promoções: Não quero reber"
              >Não receber promoções</b-form-checkbox
            >
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3 resumo-info" header="Sua informções estão corretas?">
        <pre class="m-0">
             Nome: {{ form.name }}
             Email: {{form.email}}
             Cor preferida: {{form.color}}
             </pre>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: null,
        color: '',
        checked: [],
      },
      colors: [
        { text: "Select One", value: null },
        "White",
        "Blue",
        "Black",
        "Red",
        "Green",
        "Artifact",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.color = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


<style>
.formulario {
    position: relative;
    left: 30px;
    margin-top: 30px;
    display: block;
    width: 100%;
}

.resumo-info {
    position: relative;
    left: 30px;
    margin-top: 30px;
}
</style>