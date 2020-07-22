<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input
        type="checkbox"
        id="checkbox"
        v-on:change="todo.completed = !todo.completed"
        :checked="todo.completed"
      />
      <b>{{ index + 1 }}</b>
      {{ todo.title }}
    </span>
    <router-link
      tag="a"
      class="btn"
      :to="{name: 'settingId', params: {date:{...todo}}}"
    >Изменить заметку</router-link>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>