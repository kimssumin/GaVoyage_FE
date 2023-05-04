<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/index.css";
import Vue from "vue";
import VueAgile from "vue-agile";
import Header from "./components/common/Header.vue";

Vue.use(VueAgile);
export default {
  name: "App",
  components: {
    agile: VueAgile,
    Header,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
