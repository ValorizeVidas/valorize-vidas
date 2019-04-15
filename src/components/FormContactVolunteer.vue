<template>
  <div class="columns form">
    <div class="column is-3"></div>
    <div class="column">
      <iframe
        class="google-forms"
        :src="consts.volunteer"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Carregando…</iframe
      >
    </div>
    <div class="column is-3"></div>
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
