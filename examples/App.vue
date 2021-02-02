<template>
  <div> <CommHeader label="公共头部区域"></CommHeader> content
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    this.$toast({mes:'嘻嘻嘻嘻嘻嘻',timeout:2000})
  },
};
</script>