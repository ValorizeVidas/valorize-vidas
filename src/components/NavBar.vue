<template>
  <nav class="navbar">
    <div class="menu-container">
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
    openChat() {
      if(confirm('Será aberto uma janela com o chat da CVV, deseja confirmar?'))
        window.open('http://cvvweb.mysuite1.com.br/client/chatan.php?h=&inf=&lfa=',"janela1","width=600,height=450,scrollbars=NO")
    },
  },
};
</script>
