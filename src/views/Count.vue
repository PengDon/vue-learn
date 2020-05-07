<template>
  <div>
    <button @click="increment">添加</button>
    {{this.$store.state.count}}
  </div>
</template>
<script>

export default {
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
  },
}
</script>
