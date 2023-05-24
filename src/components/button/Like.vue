<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="like" v-html="likedata[reviewInit.id]" @click="doLike"></div>
</template>
<script>
import api from "@/assets/js/util/axios.js";
import { $ } from "@/assets/js/util/elementTool";

export default {
  name: "Like",
  props: {
    reviewInit: Object,
  },

  computed: {
    likedata() {
      console.log("getter", this.$store.state.buttonStore.reviewLike);
      return this.$store.state.buttonStore.reviewLike;
    },
  },
  created() {
    console.log("init", this.reviewInit);
    console.log("init next", this.reviewInit.isLiked);
  },
  mounted() {
    // const dataObj = {
    //   islike: this.$store.state.buttonStore.reviewLike[this.reviewInit.id],
    //   id: this.reviewInit.id,
    // };
    console.log("mounted", this.reviewInit);

    const { isLiked, id } = this.reviewInit;
    const dataObj = { islike: isLiked, id };
    console.log("props > ", dataObj);
    // this.likedata = dataObj;
    this.$store.dispatch("buttonStore/updateLike", dataObj, { root: true });
  },

  methods: {
    async doLike() {
      let heartUrl = "/likes/" + this.reviewInit.id;
      try {
        const res = await api.post(heartUrl);
        const data = await res.data;

        if (data == "Y") {
          const dataObj = { islike: 1, id: this.reviewInit.id };
          this.$store.dispatch("buttonStore/updateLike", dataObj, { root: true });
        } else {
          const dataObj = { islike: 0, id: this.reviewInit.id };
          this.$store.dispatch("buttonStore/updateLike", dataObj, { root: true });
        }
        $("#like").innerHTML = this.$store.state.buttonStore.reviewLike[this.reviewInit.id];
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
#like,
#bookmark {
  margin-right: 8px;
  height: 50px;
  display: flex;
  align-items: center;
}

#like i,
#bookmark i {
  font-size: 20px;
  color: var(--color-blue);
}
</style>
