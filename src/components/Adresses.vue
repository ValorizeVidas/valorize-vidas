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
      >
        <span slot="noResult">
          😔 Não encontramos. Ligue para 188, é de graça!
        </span>
      </multiselect>
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
      >
        <span slot="noResult">
          😔 Não encontramos. Ligue para 188, é de graça!
        </span>
      </multiselect>
    </div>

    <p class="text-warning" v-if="(cities && cities.length === 0) || (locales && locales.length === 0)">😔 Infelizmente não encontramos suporte em sua cidade, mas não acabou! Ligue para 188, é de graça!</p>

    <div class="locales">
      <div class="locales-card"
        v-for="(item, key) in locales"
        :key="key">
        <p><strong>Telefone</strong>: {{ item.phone }}</p>
        <p><strong>Horário de Atendimento</strong>: {{ item.time }}</p>
        <p><strong>Endereço</strong>: {{ item.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import consts from '../config/consts'

  export default {
    name: "AdressesList",
    components: { Multiselect },
    data () {
      return {
        ufValue: null,
        cityValue: null,
        cities: null,
        locales: null,
        states: consts.states
      }
    },
  methods: {
    fetchCitiesThatHasCVV({value: uf}) {
        var self = this;

        self.cityValue = null;
        self.cities = null;
        self.locales = null;

        const proxy = `${ consts.proxy }/<url>`
        const citiesURL = `${ consts.cvvUrl }/search/cities?stateId=${uf}`

        const url = proxy.replace('<url>', citiesURL)

        fetch(url).then(res => res.json()).then(res => self.cities = res)
    },
    fetchCVVsInACity({ id }) {
        var self = this;

        const proxy = `${ consts.proxy }/<url>`
        const cvvsURL = `${ consts.cvvUrl }/search/places?city_id=${ id }`

        const url = proxy.replace('<url>', cvvsURL)

        fetch(url).then(res => res.json()).then(res => self.locales = res)
    }
    }
  }
</script>


<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
