<template>
  <header-vue></header-vue>
  <add-todo-vue @add-todo="addTodo"></add-todo-vue>
  <!-- // v-bind: このタブのコンポーネントにデータを渡す。 
    v-bind:todos='todos' で、 todosという属性でtodosの値を渡す。 -->
  <todos-vue v-bind:todos="todos" @del-todo="deleteTodo"></todos-vue>
</template>

<script>
import HeaderVue from "./components/layout/Header.vue";
import AddTodoVue from "./components/AddTodo.vue";
import TodosVue from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    AddTodoVue,
    TodosVue,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo one",
          completed: false,
        },
        {
          id: 2,
          title: "todo two",
          completed: true,
        },
        {
          id: 3,
          title: "todo three",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(newTodo){
      console.log('newItem:', newTodo),
      this.todos = [...this.todos, newTodo]
    },
    deleteTodo(id) {
      console.log(id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn.hover {
  background: #666;
}
</style>
