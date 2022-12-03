<template>
  <!-- // v-bind: このタブのコンポーネントにデータを渡す。 
    v-bind:todos='todos' で、 todosという属性でtodosの値を渡す。 -->
  <TodosVue v-bind:todos="todos"></TodosVue>
</template>

<script>
import TodosVue from './components/Todos.vue'

export default {
  name: 'App',
  components: {
    TodosVue
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'todo one',
          completed: false,
        },
        {
          id: 2,
          title: 'todo two',
          completed: true,
        },
        {
          id: 3,
          title: 'todo three',
          completed: false,
        },
      ]
    }
  },
}
</script>

<style>

</style>
