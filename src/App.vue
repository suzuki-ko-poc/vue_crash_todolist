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

import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderVue,
    AddTodoVue,
    TodosVue,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed,
        })
        .then((res) => {
          this.todos = [...this.todos, res.data];
          console.log('addTodo',res.data);
        })
        .catch((err) => console.log(err));
    },
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          this.todos = this.todos.filter((todo) => todo.id !== id);
          console.log('deleteTodo',res.status);
        })
        .catch((err) => console.log(err));
    },
  },
  // createdは、vueインスタンスが生成されたタイミングで実行される。
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => (this.todos = res.data))
      .catch((err) => console.log(err));
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
