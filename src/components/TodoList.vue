<template>
    <div>
        <ul>
            <TodoItem 
                v-for="(todo, i) of todos"
                :index="i"
                :todo="todo"
                :key="todo.id"
                @remove-todo="removeTodo"
            />
        </ul>
        <Modal 
            v-if="showModal" 
            v-bind:title="'удаление'"
            @confirm="confirmTodo" 
            @cancel="cancelRemove" 
        />
    </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'
import Modal from "@/components/Modal";

export default {
    props:['todos'],
    data(){
        return{
            showModal:false,
            idTodoDelete:null
        }
    },
    components:{
        TodoItem,
        Modal
    },
    methods:{
        removeTodo(id){
            this.showModal = true
            this.idTodoDelete = id
        },
        cancelRemove(){
            this.showModal = false
        },
        confirmTodo(){
            this.showModal = false
            this.$emit('remove-todo' , this.idTodoDelete)
        }
    },
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>