<template>
  <div class="home">
    <Loader v-if="isLoader" />
    <TodoList v-else-if="todos.length" v-bind:todos="todos" @remove-todo="removeTodo" />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import TodoList from "@/components/TodoList";

export default {
  data() {
    return {
      todos: [],
      isLoader: true,
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.isLoader = false;
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id != id);
    },
    addTodo(item) {
      this.todos.push(item);
    },
  },
  components: {
      Loader,
      TodoList
  },
};
</script>