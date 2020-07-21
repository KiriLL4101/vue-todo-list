<template>
  <div id="app">
    <h1>Todo application</h1>
    <AddItem @add-todo="addTodo" />
    <hr />
    <TodoList v-bind:todos="todos" @remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddItem from "@/components/AddItem.vue";
export default {
  name: "App",
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(json => (this.todos = json));
  },
  methods: {
    removeTodo(id) {
      if(confirm('Выуверены что хотите удалить запись?')){
        this.todos = this.todos.filter(t => t.id != id);
      }
    },
    addTodo(item) {
      this.todos.push(item);
    }
  },
  components: {
    TodoList,
    AddItem
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
