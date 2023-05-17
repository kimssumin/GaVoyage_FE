<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ planfromEach.userName }}님의 여행 😎
          </h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fa fa-close"></i></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="book">
            <img
              src="https://i.pinimg.com/564x/46/ac/60/46ac6067341ded58d7ec67510189e125.jpg"
              alt="the cast of Schitt’s Creek"
            />
          </div>
          <div>
            <p>{{ planfromEach }}</p>
            <h1>{{ planfromEach.title }}</h1>
            <h3>출발일 : {{ planfromEach.startDate }}</h3>
            <h3>도착일 : {{ planfromEach.endDate }}</h3>
          </div>
          <div class="timeline">
            <ul>
              <div v-for="(p, key, index) in planDays" :key="index">
                <li>
                  <span></span>
                  <div v-for="(attr, key, index) in plans[p]" :key="index">
                    <div class="title">{{ attr.title }}</div>
                  </div>
                  <span class="number"
                    ><span>{{ p }}</span> <span>12:00</span></span
                  >
                </li>
              </div>
              <!-- <li>
                <span></span>
                <div>
                  <div class="title">Codify</div>
                  <div class="info">Let&apos;s make coolest things in css</div>
                  <div class="type">Presentation</div>
                </div>
                <span class="number"><span>10:00</span> <span>12:00</span></span>
              </li>
              <li>
                <div>
                  <span></span>
                  <div class="title">Codify</div>
                  <div class="info">Let&apos;s make coolest things in javascript</div>
                  <div class="type">Presentation</div>
                </div>
                <span class="number"><span>13:00</span> <span>14:00</span></span>
              </li>
              <li>
                <div>
                  <span></span>
                  <div class="title">Codify</div>
                  <div class="info">Let&apos;s make coolest things in css</div>
                  <div class="type">Review</div>
                </div>
                <span class="number"><span>15:00</span> <span>17:45</span></span>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/assets/js/util/axios.js";
export default {
  name: "PlanDetail",
  props: {
    plan2: {
      type: Object,
      // default: () => {
      //   return {
      //     createdAt: "2023-05-15",
      //     modifiedAt: "2023-05-15",
      //     userName: "김싸피",
      //     title: "김포 여행",
      //     startDate: "2023-03-02",
      //     endDate: "2023-03-05",
      //     planIdx: "1",
      //   };
      // },
    },
  },
  data() {
    return {
      plans: {},
      planDays: [],
      planfromEach: {
        createdAt: this.$props.plan2.createdAt,
        modifiedAt: this.$props.plan2.modifiedAt,
        userName: this.$props.plan2.userName,
        title: this.$props.plan2.title,
        startDate: this.$props.plan2.startDate,
        endDate: this.$props.plan2.endDate,
        planIdx: this.$props.plan2.planIdx,
      },
      // createdAt: this.createdAt,
      // modifiedAt: this.modifiedAt,
      // userName: this.userName,
      // title: this.title,
      // startDate: this.startDate,
      // endDate: this.endDate,
      // planIdx: this.planIdx,
    };
  },
  // computed: {
  //   id() {
  //     return this.plan.planIdx;
  //   },
  // },
  async created() {
    console.log("this.childValue2", this.$props.plan2);
    let planDetailUrl = "/plans/" + this.$props.plan2.planIdx;
    try {
      const res = await api.get(planDetailUrl);
      const detail = await res.data;
      this.planfromEach = this.$props.plan2;

      if (Object.keys(detail).length == 0) {
        this.plans = {};
        this.planDays = [];
      } else {
        /*
        Object.keys(plan).forEach((p) => {
          // p.userName = this.$cookies.get("accesstoken").nickname;
          // console.log(plan.p);
          plan[p].forEach(attr => {

          })
        }); */

        this.plans = detail;
        this.planDays = Object.keys(detail);
        console.log("here!!", this.planDays);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style scoped>
.modal-body {
  margin: auto;
  width: 100%;
}

/*timeline*/
.timeline ul {
  margin: 0;
  margin-top: 100px;
  list-style: none;
  position: relative;
  padding: 1px 250px;
  color: var(--color-black);
  font-size: 13px;
}
.timeline ul:before {
  content: "";
  width: 1px;
  height: 100%;
  position: absolute;
  border-left: 2px dashed #fff;
}
.timeline ul li {
  position: relative;
  margin-left: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 14px;
  border-radius: 6px;
  width: 250px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
}
.timeline ul li:not(:first-child) {
  margin-top: 60px;
}
.timeline ul li > span {
  width: 2px;
  height: 100%;
  background: #fff;
  left: -30px;
  top: 0;
  position: absolute;
}
.timeline ul li > span:before,
.timeline ul li > span:after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
  position: absolute;
  background: var(--color-blue);
  left: 5px;
  top: 10px;
}
.timeline ul li span:after {
  top: 100%;
}
.timeline ul li > div {
  margin-left: 10px;
}
.timeline div .title,
.timeline div .type {
  font-weight: 600;
  font-size: 14px;
}
.timeline div .info {
  font-weight: 300;
}
.timeline div > div {
  margin-top: 5px;
}
.timeline span.number {
  height: 100%;
}
.timeline span.number span {
  position: absolute;
  font-size: 14px;
  left: -35px;
  font-weight: bold;
}
.timeline span.number span:first-child {
  top: 0;
}
.timeline span.number span:last-child {
  top: 100%;
}

/*book image*/
.book {
  width: 18.5em;
  height: 23.0991em;
  margin-top: -4.4em;
  position: relative;
  left: 30%;
  transform: perspective(60em) rotateX(58deg) rotateZ(-34deg) skewY(-7deg);
  box-shadow: -1.4em 1.7em 0.3em -0.3em rgba(0, 0, 0, 0.8),
    -1.6em 1.8em 0.9em -0.2em rgba(0, 0, 0, 0.5), 0.3em 1.9em 1.3em rgba(0, 0, 0, 0.3);
  border-top-right-radius: 0.4em;
}
.book img {
  border-top-right-radius: 0.4em;
  box-sizing: border-box;
  width: 100%;
  clip: rect(0em, 18.5em, 23.1em, 0em);
  display: block;
  position: absolute;
  filter: saturate(90%);
}
.book:before,
.book:after {
  content: "";
  position: absolute;
  top: 0;
}
.book:before {
  width: 105%;
  height: 105%;
  left: -5%;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      115deg,
      transparent 2.8%,
      #3f3f3f 3%,
      #3f3f3f 16%,
      transparent 16%
    ),
    linear-gradient(125deg, transparent 10%, #3f3f3f 10%, #3f3f3f 17%, #222 46.8%, transparent 47%),
    linear-gradient(
      125deg,
      transparent 46%,
      rgba(0, 0, 0, 0.5) 46.5%,
      rgba(0, 0, 0, 0.25) 49%,
      transparent 53%
    ),
    linear-gradient(to right, #444, #666), linear-gradient(#444, #444),
    linear-gradient(140deg, transparent 45%, #eee 45%, #ccc 96.8%, rgba(170, 170, 170, 0) 97%);
  background-size: 100% 100%, 100% 100%, 100% 100%, 100% 0.4em, 94% 0.2em, 100% 100%;
  background-position: 0 0, 0 0, 0 0, 0 95.8%, 0 100%, 0 0;
}
.book:after {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      transparent 2%,
      rgba(0, 0, 0, 0.1) 3%,
      rgba(0, 0, 0, 0.1) 4%,
      transparent 5%
    ),
    linear-gradient(-50deg, rgba(0, 0, 0, 0.1) 20%, transparent 100%),
    linear-gradient(-50deg, rgba(0, 0, 0, 0.2) 20%, transparent 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 20%, transparent 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 20%, transparent 100%);
  background-size: 100% 100%, 2% 20%, 1% 20%, 2% 20%, 1% 20%;
  background-position: 0 0, 2.2% 100%, 3% 100%, 2.2% 0, 3% 0;
}
</style>
