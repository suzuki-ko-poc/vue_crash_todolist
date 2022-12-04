<template>
  <!-- v-bind:XXX= にオブジェクトを渡すことによって、そのvalueがtrueに該当する際にはそのクラス名をつける。 -->
  <!-- ex) v-bind:class="{ 'is-complate': todo.completed } は todo.complatedがtrueの場合は is-complateというクラスメイをつける。 -->
  <div class="todo-item" v-bind:class="{ 'is-complate': todo.completed }">
    <p>{{ todo.title }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
};
</script>


<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complate {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50px;
  cursor: pointer;
  float: right;
}
</style>