<template>
  <section class="home">
    <div class="columns is-multiline is-centered-tablet-only">
      <div class="column is-full-tablet is-4-desktop">
        <a href="/">
          <figure class="logo">
            <img src="../assets/images/logo-horizontal.svg" alt="Valorize Vidas" />
          </figure>
        </a>
      </div>
      <div class="column is-full-tablet is-4-desktop">
        <div class="mensagem">
          <p>
            Estamos em manutenção. A Valorize Vidas não tem nenhum vínculo com o CVV.
          </p>
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
  },
  methods: {
    openChat() {
      if(confirm('Será aberto uma janela com o chat da CVV, deseja confirmar?'))
        window.open('http://cvvweb.mysuite1.com.br/client/chatan.php?h=&inf=&lfa=',"janela1","width=600,height=450,scrollbars=NO")
    },
  },
}
</script>
