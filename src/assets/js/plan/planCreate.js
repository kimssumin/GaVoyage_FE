export const planDate = () => {
  const dailyPlan = document.querySelector("#dailyPlans");
  const startDate = document.querySelector("#startDate").value;
  const endDate = document.querySelector("#endDate").value;
  const planDate = document.querySelector(".planDate");

  if (!startDate.includes("-") || !endDate.includes("-")) {
    alert("날짜를 입력해주세요");
  } else if (Number(startDate.split("-")[2]) > Number(endDate.split("-")[2])) {
    alert("도착일자는 출발일자보다 빠를 수 없어요");
  } else {
    //여행 일자 계산
    dailyPlan.innerHTML = "";

    const totalDay = Number(endDate.split("-")[2]) - Number(startDate.split("-")[2]) + 1;
    for (let i = 0; i < totalDay; i++) {
      const newPlan = document.createElement("div");
      newPlan.style.width = "85%";
      newPlan.style.height = "300px";
      newPlan.style.borderRadius = "20px";
      newPlan.style.margin = "10px";
      newPlan.style.backgroundColor = "whitesmoke";
      newPlan.className = "plan" + i;
      newPlan.innerHTML = getPlanBox(i);
      dailyPlan.appendChild(newPlan);

      //일자 선택 추가
      let opt = document.createElement("option");
      opt.setAttribute("value", Number(i + 1));
      opt.appendChild(document.createTextNode("Day" + Number(i + 1)));
      planDate.appendChild(opt);

      document.querySelector(".selectDate").style.display = "block";
    }
  }
};

const getPlanBox = (i) => {
  return `
  <div class="planBox${i + 1}">
  <h3>  Day ${i + 1}입니다</h3>


<div class="eachAttr" style="background-color: whitesmoke;">
  
</div>
</div>

  `;
};

const day = {};
export function addPlan() {
  console.log(day);
  // const createBtn = document.querySelector("#addPlanBtn");
  const nowDate = document.querySelector(".planDate").value;
  const dataTitle = document.querySelector("#data-title").innerHTML;
  const dataId = document.querySelector("#data-id").innerHTML;

  console.log(dataTitle, dataId);
  if (nowDate in day) {
    let check = false;
    day[nowDate].forEach((v) => {
      if (v.id == dataId) {
        check = true;
      }
    });

    if (!check) {
      day[nowDate].push({ title: dataTitle, id: dataId });
    }
  } else {
    day[nowDate] = [{ title: dataTitle, id: dataId }];
  }
  const planBox = document.querySelector(".planBox" + nowDate);
  const eachPlan = planBox.querySelector(".eachAttr");
  let div = document.createElement("div");
  day[nowDate].forEach((attr, idx) => {
    let li = document.createElement("div");
    li.innerHTML = attr.title;
    let dbtn = document.createElement("button");
    dbtn.className = "deleteBtn" + idx;
    dbtn.innerHTML = "삭제";
    div.appendChild(li);
    div.appendChild(dbtn);
    dbtn.addEventListener("click", () => {
      deletePlan(attr.id, nowDate);
    });
  });
  eachPlan.innerHTML = "";
  eachPlan.appendChild(div);
}

function deletePlan(content_id, now) {
  day[now] = day[now].filter((ele) => ele.id != content_id);
  alert("삭제되었습니다");
  console.log("here", day[now]);
  showDailyPlan(now);
}

function showDailyPlan(now) {
  const planBox = document.querySelector(".planBox" + now);
  const eachPlan = planBox.querySelector(".eachAttr");
  let div = document.createElement("div");
  day[now].forEach((attr, idx) => {
    let li = document.createElement("div");
    li.innerHTML = attr.title;
    let dbtn = document.createElement("button");
    dbtn.className = "deleteBtn" + idx;
    dbtn.innerHTML = "삭제";
    div.appendChild(li);
    div.appendChild(dbtn);
    dbtn.addEventListener("click", () => {
      deletePlan(attr.id, nowDate);
    });
  });
  eachPlan.innerHTML = "";
  eachPlan.appendChild(div);
}

// const resultBtn = document.querySelector("#resultBtn");
export function submitResult() {
  const result = { title: "", startDate: "", endDate: "", plan: {} };
  result.plan = day;
  result.title = document.querySelector("#title").value;
  result.startDate = document.querySelector("#startDate").value;
  result.endDate = document.querySelector("#endDate").value;
  console.log(result);
}
