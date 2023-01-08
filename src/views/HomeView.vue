<template>
  <add-todo-vue @add-todo="addTodo"></add-todo-vue>
  <!-- // v-bind: このタブのコンポーネントにデータを渡す。 
    v-bind:todos='todos' で、 todosという属性でtodosの値を渡す。 -->
  <todos-vue v-bind:todos="todos" @del-todo="deleteTodo"></todos-vue>
</template>

<script>
import AddTodoVue from "@/components/AddTodo.vue";
import TodosVue from "@/components/Todos.vue";


import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
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
          console.log('post axiosが呼ばれた','https://jsonplaceholder.typicode.com/todos')
          console.log('res.data', res.data)
          this.todos = [...this.todos, res.data];
          console.log('addTodo',res.data);
        })
        .catch((err) => console.log(err));
    },
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log('delete axiosが呼ばれた',`https://jsonplaceholder.typicode.com/todos/${id}`)
          this.todos = this.todos.filter((todo) => todo.id !== id);
          console.log('deleteTodo',res.status);
        })
        .catch((err) => console.log(err));
    },
  },
  // createdは、vueインスタンスが生成されたタイミングで実行される。
  created() {
    axios
      .get("http://localhost:1111/hello")
      .then((res) => {
        console.log('get axiosが呼ばれた',"http://localhost:1111hello"),
        this.todos = res.data
      }) 
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
