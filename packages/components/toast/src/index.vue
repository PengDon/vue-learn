<template>
  <div class="dui-mask">
    <div class="dui-toast">
      <p class="dui-toast-content" v-html="mes"></p>
    </div>
  </div>
</template>
<script>
export default {
  name:'toast',
  props: {
    mes: String,
    timeout: {
      type: Number,
      default: 2000,
    },
    callback: Function,
  },
}
</script>
<style lang="less" scoped>
.dui {
  &-mask {
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    z-index: 2000;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  &-toast {
    background: rgba(40, 40, 40, 0.85);
    text-align: center;
    border-radius: 3px;
    color: #ffffff;
    animation: xxx-kf-zoom-in 0.06s ease forwards;

    &-content {
      font-size: 16px;
      padding: 8px 12px;
      word-break: break-all;
    }
  }
}
</style>
