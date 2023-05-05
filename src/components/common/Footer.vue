<!-- eslint-disable vue/multi-word-component-names -->
<!-- <router-link to="/">Home</router-link>
<router-link to="/about">About</router-link> -->

<template>
  <div>
    <footer id="footer"></footer>
    <Join></Join>
    <Login></Login>
  </div>
</template>

<script>
import Join from '../member/Join.vue';
import Login from '../member/Login.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  components: {
    Join,
    Login,
  },
};
</script>

<style scoped></style>
