<template>
  <div id="app">
    <h1>Todo application</h1>
    <AddItem @add-todo="addTodo" />
    <hr />
    <Loader v-if="isLoader" />
    <TodoList v-else-if="todos.length" v-bind:todos="todos" @remove-todo="removeTodo" />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddItem from "@/components/AddItem";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      isLoader: true,
      showModal: false,
      confirmRemove: false
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => {
        this.todos = json;
        this.isLoader = false;
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id != id);
    },
    addTodo(item) {
      this.todos.push(item);
    }
  },
  components: {
    TodoList,
    AddItem,
    Loader
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 500px;
}
</style>
