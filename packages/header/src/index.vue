<template>
    <header class="comm-header">{{label}}</header>
</template>
<script>
export default {
    name:'CommHeader',
    props:{
        label:{
            type:String,
            default:'头部'
        }
    }
}
</script>
<style lang="less" scoped>
  .comm-header {
      width: 100%;
      height: 100px;
      background:blue;
  }
</style>