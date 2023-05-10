<template>
  <div class="contain">
    <router-view></router-view>
    <nav>
      <router-link to="/plan/create"
        ><button class="btn-hover color-3">새로운 여행계획</button></router-link
      >
      <router-link to="/plan/list"
        ><button class="btn-hover color-3">나의 여행계획</button></router-link
      >
    </nav>
  </div>
</template>
<script>
export default {
  name: "PlanView",
};
</script>
<style scoped></style>
