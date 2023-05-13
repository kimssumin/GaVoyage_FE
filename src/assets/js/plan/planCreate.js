import { selectFor } from '../map/selectBox';
import { $, createElement } from '../util/elementTool';

export const planDate = () => {
  const dailyPlan = document.querySelector('#dailyPlans');
  const startDate = document.querySelector('#startDate').value;
  const endDate = document.querySelector('#endDate').value;

  if (!startDate.includes('-') || !endDate.includes('-')) {
    alert('날짜를 입력해주세요');
  } else if (Number(startDate.split('-')[2]) > Number(endDate.split('-')[2])) {
    alert('도착일자는 출발일자보다 빠를 수 없어요');
  } else {
    //여행 일자 계산
    dailyPlan.innerHTML = '<h1>Plans</h1>';

    const totalDay = Number(endDate.split('-')[2]) - Number(startDate.split('-')[2]) + 1;
    let optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';

    for (let i = 0; i < totalDay; i++) {
      if (i % 2 == 0) {
        const newLine = document.createElement('div');
        newLine.className = 'row';
        newLine.id = 'plan' + i;
        const newPlan = getPlanBox(i, Number(startDate.split('-')[2]));
        newLine.appendChild(newPlan);
        dailyPlan.appendChild(newLine);
      } else {
        const newLine = dailyPlan.querySelector('#plan' + (i - 1));
        const newPlan = getPlanBox(i, Number(startDate.split('-')[2]));
        newLine.appendChild(newPlan);
      }

      //일자 선택 추가
      let opt = createElement('div');
      opt.className = 'option';
      let inpt = createElement('input');
      inpt.type = 'radio';
      inpt.className = 'radio';
      inpt.name = i + 1;
      inpt.value = Number(i + 1);
      let lnpt = createElement('label', 'Day ' + Number(i + 1));
      opt.appendChild(inpt);
      opt.appendChild(lnpt);
      optionsContainer.appendChild(opt);

      document.querySelector('.selectDate').style.display = 'block';
    }
  }
};

const getPlanBox = (i, day) => {
  const newPlan = document.createElement('article');
  newPlan.className = `card fl-left planBox${i + 1}`;
  const newDate = document.createElement('section');
  newDate.className = 'date';
  const dateDiv = document.createElement('time');
  const dateSpan = document.createElement('span');
  dateSpan.innerHTML = day + i;
  const dateSpan2 = document.createElement('span');
  dateSpan2.innerHTML = 'Day ' + (i + 1);
  dateDiv.appendChild(dateSpan);
  dateDiv.appendChild(dateSpan2);
  newDate.appendChild(dateDiv);
  newPlan.appendChild(newDate);

  const newContent = document.createElement('section');
  newContent.className = 'card-cont';
  newPlan.appendChild(newContent);
  return newPlan;
};

const day = {};
export function addPlan() {
  console.log(day);
  // const createBtn = document.querySelector("#addPlanBtn");
  const nowDate = $('#selectedContent').value;
  const dataTitle = document.querySelector('#data-title').innerHTML;
  const dataId = document.querySelector('#data-id').innerHTML;

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
  showDailyPlan(nowDate);
}

function deletePlan(content_id, now) {
  day[now] = day[now].filter((ele) => ele.id != content_id);
  alert('삭제되었습니다');
  console.log('here', day[now]);
  showDailyPlan(now);
}

function showDailyPlan(nowDate) {
  const planBox = document.querySelector('.planBox' + nowDate);
  const eachPlan = planBox.querySelector('.card-cont');
  eachPlan.innerHTML = '';

  day[nowDate].forEach((attr, idx) => {
    let div = document.createElement('div');
    div.className = 'even-info';
    div.innerHTML = `<i class="fa fa-map-marker me-2"></i>`;

    let ptext = document.createElement('p');
    ptext.innerHTML = attr.title;
    let dbtn = document.createElement('button');
    dbtn.className = 'deleteBtn' + idx;
    dbtn.id = 'deleteBtn';
    dbtn.innerHTML = 'DELETE';
    div.appendChild(ptext);
    div.appendChild(dbtn);
    dbtn.addEventListener('click', () => {
      deletePlan(attr.id, nowDate);
    });
    eachPlan.appendChild(div);
  });
}

// const resultBtn = document.querySelector("#resultBtn");
export function submitResult() {
  const result = { title: '', startDate: '', endDate: '', plan: {} };
  result.plan = day;
  result.title = document.querySelector('#title').value;
  result.startDate = document.querySelector('#startDate').value;
  result.endDate = document.querySelector('#endDate').value;
  console.log(result);
}

export function selectDate() {
  selectFor('.selectDate');
}
