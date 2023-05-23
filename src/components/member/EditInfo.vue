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
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="John Doe" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="john@example.com" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-sm-3">
                  <h6 class="mb-0">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  <input type="text" class="form-control" value="(239) 816-9029" />
                </div>
              </div>
              <div class="row-btn">
                <button class="btn-get-started">수정하기</button>
                <button class="btn-get-deleted">회원탈퇴</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditInfo',
};
</script>
<style>
.card2 .row {
  display: flex;
  align-items: center;
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
</style>
