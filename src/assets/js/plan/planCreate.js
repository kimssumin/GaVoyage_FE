import { selectFor } from "../map/selectBox";
import { $, createElement } from "../util/elementTool";

import store from "@/store/index.js";

export const planDate = () => {
  const dailyPlan = $("#dailyPlans");
  const startDate = $("#startDate").value;
  const stdate = new Date(
    startDate.split("-")[0],
    startDate.split("-")[1] - 1,
    startDate.split("-")[2]
  );
  const endDate = $("#endDate").value;
  const eddate = new Date(endDate.split("-")[0], endDate.split("-")[1] - 1, endDate.split("-")[2]);
  console.log(startDate, endDate);
  const dayDiff = Math.ceil((eddate.getTime() - stdate.getTime()) / (1000 * 60 * 60 * 24));
  if (!startDate.includes("-") || !endDate.includes("-")) {
    alert("날짜를 입력해주세요");
  } else if (dayDiff < 0) {
    alert("도착일자는 출발일자보다 빠를 수 없어요");
  } else if (dayDiff > 14) {
    alert("여행 계획은 2주까지만 작성가능 해요 😢");
  } else {
    //여행 일자 계산
    dailyPlan.innerHTML = "<h1>Plans</h1>";

    const totalDay = dayDiff + 1;
    let optionsContainer = $(".options-container");
    optionsContainer.innerHTML = "";

    for (let i = 0; i < totalDay; i++) {
      if (i % 2 == 0) {
        const newLine = createElement("div");
        newLine.className = "row";
        newLine.id = "plan" + i;
        const newPlan = getPlanBox(i, stdate); //Number(startDate.split("-")[2])
        newLine.appendChild(newPlan);
        dailyPlan.appendChild(newLine);
      } else {
        const newLine = dailyPlan.querySelector("#plan" + (i - 1));
        const newPlan = getPlanBox(i, stdate);
        newLine.appendChild(newPlan);
      }

      //일자 선택 추가
      let opt = createElement("div");
      opt.className = "option";
      let inpt = createElement("input");
      inpt.type = "radio";
      inpt.className = "radio";
      inpt.name = i + 1;
      inpt.value = Number(i + 1);
      let lnpt = createElement("label", "Day " + Number(i + 1));
      opt.appendChild(inpt);
      opt.appendChild(lnpt);
      optionsContainer.appendChild(opt);

      $(".selectDate").style.display = "block";
    }
  }
};

const getPlanBox = (i, day) => {
  const newPlan = createElement("article");
  newPlan.className = `card fl-left planBox${i + 1}`;
  const newDate = createElement("section");
  newDate.className = "date";
  const dateDiv = createElement("time");
  const dateSpan = createElement("span");
  let result = day;
  result = new Date(result.getTime() + i * (1000 * 60 * 60 * 24));
  console.log(result);
  dateSpan.innerHTML = result.getDate();
  const dateSpan2 = createElement("span");
  dateSpan2.innerHTML = "Day " + (i + 1);
  dateDiv.appendChild(dateSpan);
  dateDiv.appendChild(dateSpan2);
  newDate.appendChild(dateDiv);
  newPlan.appendChild(newDate);

  const newContent = createElement("section");
  newContent.className = "card-cont";
  newPlan.appendChild(newContent);
  return newPlan;
};

// const day = {};
export function addPlan() {
  // const createBtn = document.querySelector("#addPlanBtn");
  const nowDate = $("#selectedContent").value;
  const dataTitle = $("#data-title").innerHTML;
  const dataId = $("#data-id").innerHTML;
  console.log(nowDate, typeof nowDate);
  if (nowDate == undefined) {
    alert("일정 날짜를 선택해주세요 !");
    return;
  }
  console.log(dataTitle, dataId);
  let planObj = {
    day: nowDate,
    title: dataTitle,
    id: dataId,
  };
  store.dispatch("planStore/addPlans", planObj, { root: true });
  showDailyPlan(nowDate);
}

function deletePlan(content_id, now) {
  let deleteObj = {
    day: now,
    id: content_id,
  };
  store.dispatch("planStore/removePlans", deleteObj, { root: true });
  showDailyPlan(now);
}

function showDailyPlan(nowDate) {
  const planBox = $(".planBox" + nowDate);
  const eachPlan = planBox.querySelector(".card-cont");
  eachPlan.innerHTML = "";

  const day = store.state.planStore.plans;
  day[nowDate].forEach((attr, idx) => {
    let div = createElement("div");
    div.className = "even-info";
    div.innerHTML = `<i class="fa fa-map-marker me-2"></i>`;

    let ptext = createElement("p");
    ptext.innerHTML = attr.title;
    let dbtn = createElement("button");
    dbtn.className = "deleteBtn" + idx;
    dbtn.id = "deleteBtn";
    dbtn.innerHTML = "DELETE";
    div.appendChild(ptext);
    div.appendChild(dbtn);
    dbtn.addEventListener("click", () => {
      deletePlan(attr.id, nowDate);
    });
    eachPlan.appendChild(div);
  });
}

export function selectDate() {
  selectFor(".selectDate");
}
