<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create todo</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        onSubmit(){
            if(this.title.trim()){
                this.$emit('add-todo', {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                })
                this.title = ''
            }
        }
    },
}
</script>