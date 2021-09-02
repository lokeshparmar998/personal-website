<template>
    <button :class="button.class" @click="handleButtonClick">
        {{button.text}}
    </button>
</template>
<script>
export default {
    props:{
        button: Object
    },
    methods:{
        handleButtonClick(){
            if(this.button.route)
                this.$router.push({path: this.button.navigation})
            else
                this.$emit('operation',this.button.operation)
        }
    }
}
</script>
<style scoped>
.primary{
    color: white;
    background-color: #273950;
    border: 1px solid #3f536e;
    border-radius: 4px;
    padding: 10px 24px;
    font-size: 15px;
    cursor: pointer;
}
.secondary{
    color: white;
    background-color: #0093ee;
    border: 1px solid #0093ee;
    border-radius: 4px;
    padding: 10px 24px;
    font-size: 15px;
    cursor: pointer;
}
.nunito_font{
    font-family: 'nunito',sans-serif;
}
.lato_font{
    font-family: 'lato',sans-serif;
}
.size20{
    width: 20%;
}
.size30{
    width: 30%;
}
.size45{
    width: 45%;
}
.size50{
    width: 50%;
}
</style>