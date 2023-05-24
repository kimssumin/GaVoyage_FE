<template>
  <div
    class="modal fade"
    id="infoModif"
    tabindex="-1"
    aria-labelledby="infoModifLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="infoModifLabel">회원정보수정</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i class="fa fa-close"></i></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card2">
            <div class="card2-body">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">이름(닉네임)</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    class="form-control"
                    id="nickname"
                    placeholder="사용자 명을 입력해주세요"
                    name="nickname"
                    @keyup="nicknameCheck"
                  />
                  <p class="ms-2 mt-sm-1" id="message-nickname"></p>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">이메일</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="email"
                    :value="nowUser.email"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">전화번호</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input
                    type="text"
                    readonly
                    class="form-control"
                    id="phoneNumber"
                    :value="nowUser.phoneNumber"
                  />
                </div>
              </div>
              <div class="row-btn">
                <button class="btn-get-started" @click="modifInfo">수정하기</button>
                <button class="btn-get-deleted" @click="deleteInfo">회원탈퇴</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onLogout } from '@/assets/js/member/login';
import { nicknameCheck } from '@/assets/js/member/registerCheck.js';
import api from '@/assets/js/util/axios.js';
import { $ } from '@/assets/js/util/elementTool';

export default {
  name: 'EditInfo',
  data() {
    return {
      nowUser: {},
    };
  },
  created() {
    let profileUrl = '/users/login';
    try {
      api.get(profileUrl).then(({ data }) => {
        console.log('profile data arrived', data);
        this.nowUser = data;
      });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    nicknameCheck: nicknameCheck,
    async modifInfo() {
      const modifUrl = '/users/update/nickname';
      try {
        const res = await api.post(modifUrl, { nickname: $('#nickname').value });
        const data = { ...this.$cookies.get('accesstoken') };
        data.nickname = $('#nickname').value;
        this.$cookies.set('accesstoken', data, '1d');
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    },

    async deleteInfo() {
      const deleteUrl = '/users';
      try {
        const res = await api.delete(deleteUrl);
        alert('회원탈퇴가 완료되었습니다');
        onLogout();
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style>
.card2 .row {
  display: flex;
  align-items: baseline;
}

.row-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.btn-get-deleted {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  line-height: 1;
  color: rgb(255, 255, 255);
  animation-delay: 0.8s;
  padding: 12px 32px;
  border-radius: 5px;
  transition: all 0.5s ease 0s;
  margin: 10px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  background: rgb(204, 5, 5);
}

#infoModif #message-nickname {
  text-align: left;
}
</style>
