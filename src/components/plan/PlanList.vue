<template>
  <div class="container1">
    <PlanEach></PlanEach>
    <PlanEach></PlanEach>
    <PlanEach></PlanEach>
  </div>
</template>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"); */

.container1 {
  background: var(--color-background);
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.container1 .ticket {
  margin-right: 20px;
}
</style>
<script>
import PlanEach from "./PlanEach.vue";
export default {
  name: "PlanList",
  components: {
    PlanEach,
  },
};
</script>
