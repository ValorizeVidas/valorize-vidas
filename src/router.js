import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./views/Chat.vue";
import Contact from "./views/Contact.vue";
import ContactVolunteer from "./views/ContactVolunteer.vue";
import Adresses from "./views/Adresses.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat
    },
    {
      path: "/voluntariar",
      name: "ContactVolunteer",
      component: ContactVolunteer
    },
    {
      path: "/contato",
      name: "Contact",
      component: Contact
    },
    {
      path: "/enderecos",
      name: "Adresses",
      component: Adresses
    }
  ]
});
