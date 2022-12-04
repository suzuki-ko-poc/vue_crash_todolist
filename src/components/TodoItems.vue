<template>
  <!-- v-bind:XXX= にオブジェクトを渡すことによって、そのvalueがtrueに該当する際にはそのクラス名をつける。 -->
  <!-- ex) v-bind:class="{ 'is-complate': todo.completed } は todo.completedがtrueの場合は is-complateというクラスメイをつける。 -->
  <div class="todo-item" v-bind:class="{ 'is-complate': todo.completed }">
    <!-- @changeは、フォームコントロールの入力内容が変わると、発生するイベント -->
    <!-- v-on:change と @change は同等 -->
    <input type="checkbox" @change="markComplate" />
    <!-- $emit('AAA', value)  で 親コンポーネントに 'AAA'というイベントで、valueという引数を渡す。 -->
    <button class="del" @click="$emit('del-todo', todo.id)">x</button>
    <p>{{ todo.title }}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplate() {
      // eslint-disable-next-line vue/no-mutating-props
      this.todo.completed = !this.todo.completed;
    },
  },
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