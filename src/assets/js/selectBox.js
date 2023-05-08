export function selectArea() {
  let areaUrl = "/region/sido";
  fetch(areaUrl)
    .then((response) => response.json())
    .then((data) => makeArea(data));

  function makeArea(data) {
    console.log(data);
    if (document.querySelector("#search-sigungu").querySelector(".selected").value !== -1) {
      document.querySelector("#search-sigungu").querySelector(".selected").value = -1;
      document.querySelector("#search-sigungu").querySelector(".selected").innerHTML = "시/군/구";
    }
    let sel = document.getElementById("search-area");
    let optionsContainer = sel.querySelector(".options-container");
    optionsContainer.innerHTML = "";

    data.forEach(function (area, i) {
      let opt = document.createElement("div");
      opt.className = "option";
      let inpt = document.createElement("input");
      inpt.type = "radio";
      inpt.className = "radio";
      inpt.name = area.sido_code;
      inpt.value = area.sido_code;
      let lnpt = document.createElement("label");
      lnpt.innerHTML = area.sido_name;
      opt.appendChild(inpt);
      opt.appendChild(lnpt);
      optionsContainer.appendChild(opt);
    });
    selectFor("#search-area");
  }
}

export function selectSigungu() {
  if (document.querySelector("#search-area").querySelector(".selected").value !== -1) {
    let sel = document.getElementById("search-area");

    let selval = sel.querySelector(".selected").value;
    console.log(selval);
    let areaCode = selval;
    let sigunguUrl = "/region/gugun?sidoCode=" + areaCode;

    let selSigungu = document.getElementById("search-sigungu");
    let optionsContainer = selSigungu.querySelector(".options-container");
    optionsContainer.innerHTML = "";

    fetch(sigunguUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((sigungu) => {
          let opt = document.createElement("div");
          opt.className = "option";
          let inpt = document.createElement("input");
          inpt.type = "radio";
          inpt.className = "radio";
          inpt.name = sigungu.gugun_name;
          inpt.value = sigungu.gugun_code;
          let lnpt = document.createElement("label");
          lnpt.innerHTML = sigungu.gugun_name;
          opt.appendChild(inpt);
          opt.appendChild(lnpt);
          optionsContainer.appendChild(opt);
        });
        selectFor("#search-sigungu");
      });
  }
}

export function selectContent() {
  selectFor("#search-content-id");
}

export function searchFin() {
  selectForSearch();
}

const selectFor = (query) => {
  const contentId = document.querySelector(query);
  const selected = contentId.querySelector(".selected");
  const optionsContainer = contentId.querySelector(".options-container");
  const optionsList = optionsContainer.querySelectorAll(".option");
  optionsContainer.classList.toggle("active");

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      const optionsContainer = contentId.querySelector(".options-container");

      selected.innerHTML = o.querySelector("label").innerHTML;
      selected.value = o.querySelector("input").value;
      optionsContainer.classList.remove("active");
    });
  });
};

const selectForSearch = () => {
  const searchAreaAll = [-1, -1, -1];
  searchAreaAll[0] = document.querySelector("#search-area").querySelector(".selected").value;
  searchAreaAll[1] = document.querySelector("#search-sigungu").querySelector(".selected").value;
  searchAreaAll[2] = document.querySelector("#search-content-id").querySelector(".selected").value;
  console.log(searchAreaAll);
};
