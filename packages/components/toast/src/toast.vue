<template>
  <div class="dui-mask" :class="{'dui-fixed':isFixed}">
    <div class="dui-toast">
      <div class="dui-toast-content">{{ mes }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    mes: String,
    timeout: {
      type: Number,
      default: 2000,
    },
    callback: Function,
    isFixed: true,
  },
}
</script>
<style lang="less" scoped>
.dui {
  &-mask {
    background-color: rgba(0, 0, 0, 0);
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
  &-fixed {
    position: fixed;
  }
  &-toast {
    background: rgba(40, 40, 40, 0.85);
    text-align: center;
    border-radius: 3px;
    color: #ffffff;
    animation: xxx-kf-zoom-in 0.06s ease forwards;

    &-content {
      font-size: 16px;
      padding: 4px 12px;
      word-break: break-all;
    }
  }
}
</style>
