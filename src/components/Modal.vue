<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-footer">
          <slot name="footer">Подтвердить {{title}} ?</slot>
          <div class="action">
            <button class="modal-default-button btn" @click="$emit('confirm')">OK</button>
            <button class="modal-default-button btn" @click="$emit('cancel')">Отмена</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props:{
    title:String
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 20px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.action {
  display: block;
  margin-top: 10px;
}
.btn {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 10px;
  color: #555555;
  width: 94px;
  margin: 7px;
  padding: 6px 0;
  font-size: 12px;
  text-align: center;
}
.btn:hover,
.btn:focus {
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
    0 0 8px rgba(82, 168, 236, 0.6);
  outline: 0 none;
}
</style>