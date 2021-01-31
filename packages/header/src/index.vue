<template>
    <header>{{label}}</header>
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