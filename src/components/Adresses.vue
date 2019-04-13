<template>
  <div class="Address-wrapper">

    <h1>Para te ajudar, precisamos saber algumas informações 😊</h1>

    <div class="adress-select-wrapper">
      <multiselect
        v-model="ufValue"
        :options="states"
        @select="fetchCitiesThatHasCVV"
        track-by="label"
        label="label"
        placeholder="Em que estado você está?"
        selectLabel=""
        selectedLabel="selecionado"
        deselectLabel=""    
      ></multiselect>
    </div>
    
    <div class="adress-select-wrapper">
      <multiselect
        v-if="cities && cities.length > 0"
        v-model="cityValue"
        :options="cities"
        @select="fetchCVVsInACity"
        track-by="id"
        label="name"
        placeholder="Em que cidade você está?"
        selectLabel=""
        selectedLabel="selecionado"
        deselectLabel=""
      ></multiselect>
    </div>

    <p class="text-warning" v-if="(cities && cities.length === 0) || (locales && locales.length === 0)">😔 Infelizmente não encontramos nenhum suporte em sua cidade, mas não acabou! Ligue para 188, é de graça!</p>

    <div class="locales">
      <div class="locales-card" v-for="item in locales">
        <p><strong>Telefone</strong>: {{ item.phone }}</p>
        <p><strong>Horário de Atendimento</strong>: {{ item.time }}</p>
        <p><strong>Endereço</strong>: {{ item.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
 import Multiselect from 'vue-multiselect'

  export default {
    name: "AdressesList",
    components: { Multiselect },
    data () {
      return {
        ufValue: null,
        cityValue: null,
        cities: null,
        locales: null,
        states: [
          {value: "AC", label: "Acre"},
          {value: "AL", label: "Alagoas"},
          {value: "AM", label: "Amazonas"},
          {value: "AP", label: "Amapá"},
          {value: "BA", label: "Bahia"},
          {value: "CE", label: "Ceará"},
          {value: "DF", label: "Distrito Federal"},
          {value: "ES", label: "Espírito Santo"},
          {value: "GO", label: "Goiás"},
          {value: "MA", label: "Maranhão"},
          {value: "MG", label: "Minas Gerais"},
          {value: "MS", label: "Mato Grosso do Sul"},
          {value: "MT", label: "Mato Grosso"},
          {value: "PA", label: "Pará"},
          {value: "PB", label: "Paraíba"},
          {value: "PE", label: "Pernambuco"},
          {value: "PI", label: "Piauí"},
          {value: "PR", label: "Paraná"},
          {value: "RJ", label: "Rio de Janeiro"},
          {value: "RN", label: "Rio Grande do Norte"},
          {value: "RO", label: "Rondônia"},
          {value: "RR", label: "Roraima"},
          {value: "RS", label: "Rio Grande do Sul"},
          {value: "SC", label: "Santa Catarina"},
          {value: "SE", label: "Sergipe"},
          {value: "SP", label: "São Paulo"},
          {value: "TO", label: "Tocantins"},
        ]
      }
    },
  methods: {
    fetchCitiesThatHasCVV({value: uf}) {
        /* TODO: Colocar em contantes? */
        var self = this;

        self.cityValue = null;
        self.cities = null;
        self.locales = null;

        const proxy = `https://cors-anywhere.herokuapp.com/<url>`
        const citiesURL = `https://www.cvv.org.br/search/cities?stateId=${uf}`

        const url = proxy.replace('<url>', citiesURL)

        console.log(url)

        fetch(url).then(res => res.json()).then(res => self.cities = res)
    },
    fetchCVVsInACity({ id }) {
         /* TODO: Colocar em contantes? */
        var self = this;

        const proxy = `https://cors-anywhere.herokuapp.com/<url>`
        const cvvsURL = `https://www.cvv.org.br/search/places?city_id=${ id }`

        const url = proxy.replace('<url>', cvvsURL) 

        fetch(url).then(res => res.json()).then(res => self.locales = res)
    }
    }
  }
</script>


<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="css" scoped>
 .Address-wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
 }

 h1 {
   font-family: 'Montserrat Medium';
    font-size: 2rem;
    color: #000000a3;
    margin-bottom: 1rem;
 } 

 .text-warning {
    border: 1px solid darkred;
    padding: 1rem;
    border-radius: 5px;
    background: rgba(255, 0, 0, 0.1);
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
 }

 .adress-select-wrapper {
   margin-bottom: 1rem;
 }

 .locales {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-right: -1rem;
 }

 .locales-card {
    border: 1px solid #bcbdbc;
    padding: 1rem;
    border-radius: 5px;
    background: rgb(255, 250, 250);
    margin: 1rem;
    width: fit-content;
 }
</style>