<template>
    <div class="icon-container" @click="goto()">
        <fa :icon="icon" class="icon" />
    </div>
</template>
<script>
export default {
    props:{
        icon: String,
        route: String
    },
    methods:{
        goto(){
            this.$router.push({path: `${this.route}`})
        }
    }
}
</script>
<style scoped>
.icon-container{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    display: grid;
    place-items: center;
}
.icon{
    color: #b2becd;
    font-size: 30px;
}
.icon:hover{
    color: #11C0BD;
    cursor: pointer;
}
</style>