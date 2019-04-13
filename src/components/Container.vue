<template>
  <section class="home">
    <div class="columns is-multiline is-centered-tablet-only">
      <div class="column is-full-tablet is-4-desktop">
        <figure class="logo">
          <img src="../assets/images/logo-horizontal.svg" alt="Valorize Vidas" />
        </figure>
      </div>
      <div class="column is-full-tablet is-4-desktop">
        <div class="mensagem">
          <p>
            Pode ficar tranquilo que podemos te ajudar. Entre em contato com a gente da forma como
            preferir
          </p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline cards">
      <div class="column is-full-tablet is-half-desktop cards-container-column">
        <div class="columns is-variable is-4 is-centered-tablet-only">
          <div class="column is-half-desktop">
            <span class="cards-title">Precisa de ajuda?</span>
          </div>
        </div>
        <div class="columns is-variable is-4">
          <div class="column card-column">
            <Card :title="'Chat'" :icon="'comments-regular'" :bgColor="'#F38C18'" />
          </div>
          <div class="column card-column">
            <Card :title="'Ligue 188'" :icon="'mobile-alt-solid'" :bgColor="'#F38C18'" />
          </div>
        </div>
        <div class="columns is-variable is-4">
          <div class="column card-column">
            <Card :title="'Email'" :bgColor="'#F38C18'" />
          </div>
          <div class="column card-column">  
            <router-link to="/enderecos">
              <Card :title="'Endereços'" :bgColor="'#F38C18'" />
            </router-link> 
          </div>
        </div>
      </div>
      <div class="column is-full-tablet is-half-desktop cards-container-column">
        <div class="columns is-variable is-4 is-centered-tablet-only">
          <div class="column is-half-desktop">
            <span class="cards-title">Quer ajudar?</span>
          </div>
        </div>
        <div class="columns is-variable is-4">
          <div class="column card-column">
            <a href="http://apoia.se/valorizevidas" target="_blank">
              <Card :title="'Contribuir'" :icon="'hand-holding-usd-solid'" :bgColor="'#E8AE28'" />
            </a>
          </div>
          <div class="column card-column">
            <Card :title="'Voluntariar'" :icon="'hand-holding-heart-solid'" :bgColor="'#F7C248'" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Container',
  components: {
    Card
  }
}
</script>
