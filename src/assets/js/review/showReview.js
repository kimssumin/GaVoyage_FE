/* eslint-disable no-undef */
import store from '@/store/index.js';
import api from '../util/axios.js';
import { $ } from '../util/elementTool.js';

export function makeMap(data) {
  let startX = data.latitude;
  let startY = data.longitude;
  // console.log(startX, startY);
  let mapContainer = $('#map'), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(Number(startX), Number(startY)), // 지도의 중심좌표.
      level: 4, // 지도의 확대 레벨
    };

  // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
  let mapi = new kakao.maps.Map(mapContainer, mapOption);
  let latlng = new kakao.maps.LatLng(startX, startY);
  let marker = new kakao.maps.Marker({
    map: mapi, // 마커를 표시할 지도
    position: latlng, // 마커를 표시할 위치
    title: data.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
  });

  // 마커에 표시할 인포윈도우를 생성합니다
  let infowindow = new kakao.maps.InfoWindow({
    content:
      '<div style="width:350px; height: 170px">' +
      '<div style="height:20%;" class="row mt-1 ms-2 fw-bold">' +
      data.title +
      '</div>' +
      '<div style="height:80%;" class="row m-1 d-flex">' +
      '<div style="width:40%;">' +
      '<img style="width:100%; height:100px;" src=' +
      data.first_image +
      ' />' +
      '</div>' +
      '<div style="width:60%;">' +
      '<p style="font-size: 10pt; margin: 1px" class="fw-bold">주소</p>' +
      '<p style="font-size: 10pt; margin: 1px">' +
      data.addr1 +
      '\n' +
      data.addr2 +
      '</p>' +
      '</div>' +
      '</div>' +
      '</div>', // 인포윈도우에 표시할 내용
  });
  kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(mapi, marker, infowindow));
  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
  kakao.maps.event.addListener(marker, 'click', showDescription(data));
}

function showDescription(data) {
  return detailAttr(data);
}

async function detailAttr(data) {
  let detailUrl = '/regions/description?contentId=' + data.content_id;
  try {
    const res = await api.get(detailUrl);
    const description = await res.data;
    let mlist = $('#my-list');
    mlist.replaceChildren();
    let li = document.createElement('li');
    let content = `<div class="m1">
			    					<hr>
				    				<h5 id = "data-title" style="font-weight: bold;">${data.title}</h5>
                    <span id = "data-id" style = "display:none;" >${data.content_id}</span>
				    				<hr/>
				    				<div style="margin: 10px";>
				        				<img class = "dataImg mb-4" src="${
                          data.first_image
                        }" onerror="this.src='https://cdn-icons-png.flaticon.com/512/4944/4944051.png'" />
				        				<br/>
				        				<span style="font-size: 14px; font-weight:bold;">주소 : ${data.addr1}</span>
				        				<br/>
				        				<span class = "mt-2" style="font-size: 14px;">${description.overview.substr(0, 121)}</span>
                        
				    				</div>
                    
                    <div id = "scrapBtn${data.content_id}" class= "scrapBtn">${
      store.state.buttonStore.attrScrap[data.content_id]
    }</div>
                    <button class = "btn-search"><a href= "https://search.naver.com/search.naver?where=nexearchie=utf8&query=${
                      data.title
                    }" target="_blank">더 알아보기 &nbsp; <i class="far fa-search-location"></i></a></button>
			    				</div>`;

    li.innerHTML = content;
    mlist.appendChild(li);
    $('.scrapBtn').addEventListener('click', () => {
      doScrap(data.content_id);
    });

    $('.dataImg').style.width = '40%';
  } catch (e) {
    console.log(e);
  }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수
function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}

async function doScrap(content_id) {
  let scrapUrl = '/scraps/' + content_id;
  try {
    const res = await api.post(scrapUrl);
    const data = await res.data;

    if (data == 'Y') {
      //$('#scrapBtn').innerHTML = '스크랩 취소';
      const dataObj = { content_id: content_id, value: 1 };
      store.dispatch('buttonStore/updateScrap', dataObj, { root: true });
    } else {
      //$('#scrapBtn').innerHTML = '스크랩 하기';
      const dataObj = { content_id: content_id, value: 0 };
      store.dispatch('buttonStore/updateScrap', dataObj, { root: true });
    }
    $('#scrapBtn' + content_id).innerHTML = store.state.buttonStore.attrScrap[content_id];
    console.log(store.state.buttonStore.attrScrap[content_id]);
  } catch (e) {
    console.log(e);
  }
}
