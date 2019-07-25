<template>
  <div id="app">
    <Navbar />
    <section class="columns is-centered">
      <div class="column is-three-fifths">
        <router-view />
      </div>
    </section>
    <div class="columns is-centered">
      <div class="column is-three-fifths">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
<style lang="scss"></style>
