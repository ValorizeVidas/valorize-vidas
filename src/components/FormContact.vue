<template>
  <div class="columns is-centered form">
    <div class="column is-half">
      <iframe
        class="google-forms"
        :src="consts.contact"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Carregando…</iframe
      >
    </div>
  </div>
</template>
<script>
  import consts from '../config/consts'
  export default {
    data() {
      return {
        consts
      }
    },
  }
</script>
