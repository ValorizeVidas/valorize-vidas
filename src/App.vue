<template>
  <div id="app">
    <Navbar />
    <section class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <router-view />
      </div>
      <div class="column"></div>
    </section>
    <div class="columns">
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <Footer />
      </div>
      <div class="column"></div>
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
