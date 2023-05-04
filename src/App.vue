<template>
  <div id="app">
    <Header></Header>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
 
<script>
import Header from "./components/common/Header.vue";
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
@import "@/assets/css/index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
