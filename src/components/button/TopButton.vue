<template>
  <div>
    <i class="fas fa-arrow-circle-up"></i>
  </div>
</template>
<style>
#top {
  position: fixed;
  bottom: 90%;
  right: 80%;
}
</style>
<script>
export default {
  methods: {
    top() {
      let top = $("#top");
      window.addEventListener("scroll", function () {
        if (this.scrollY > 200) {
          top.classList.add("on");
        } else {
          top.classList.remove("on");
        }
      });

      top.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },
  },
};
</script>
