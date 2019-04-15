<template>
  <nav class="navbar">
    <div class="menu-container">
      <button class="menu-button" v-on:click = "toggleMenu()">
        <svg viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </button>
      <ul class="menu-sidebar" v-bind:class="{ active: isActive }">
        <li>
          <button class="menu-button close" v-on:click = "toggleMenu()">
            <svg viewBox="0 0 100 100">
              <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z"/>
            </svg>
          </button>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/chat">Chat</router-link>
        </li>
        <li>
          <a href="http://apoia.se/valorizevidas" target="_blank" >Contribuir</a>
        </li>
        <li>
          <router-link to="/enderecos">Endereços</router-link>
        </li>
        <li>
          <router-link to="/voluntariar">Voluntariar</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
