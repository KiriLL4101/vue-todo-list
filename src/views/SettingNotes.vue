<template>
  <div class="setting">
    <h1>Setting page {{ date.title }}</h1>
    <form v-if="isChangeTitle" @submit.prevent="submitTitle">
        <input type="text" v-model="titleNote"/>
    </form>
    <button @click="isChangeTitle = !isChangeTitle">Chenge title note</button>
    <router-link to="/">Go to back</router-link>
    <hr>
    <AddItem 
        @add-todo="addTodo"
    />
    <!-- <TodoList v-if="date.todos.length" v-bind:todos="date.todos" @remove-todo="removeTodo" /> -->
    <p>No todos</p>
  </div>
</template>
<script>
import AddItem from '@/components/AddItem'
import TodoList from '@/components/TodoList'
import Loader from '@/components/Loader'

export default {
  props: {
    date:Object
  },
  data() {
    return {
        isChangeTitle:false,
        titleNote:'',
        isLoader: true,
    };
  },
  methods: {
      submitTitle(){
          
      },
      addTodo(){

      },
      removeTodo(){

      }
  },
  components: {
      AddItem,
      TodoList,
      Loader
  },
};
</script>