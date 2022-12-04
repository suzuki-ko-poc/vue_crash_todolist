<template>
  <div>
    <form @submit="addTodo">
      <!-- v-modelはv-onとv-bindをまとめて一行で書ける。 -->
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="AddTodo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>


<script>
import {v4} from 'uuid';

export default {
  name: "AddTodo",
  /**
   * dataとpropsの違いは、
   * props: 親コンポーネント(外側)から渡されるであろう値を自コンポーネントに定義しておくもの。
   * data: コンポーネントがインスタンス化される時に生成される。コンポーネントが持っているコンストラクタみたいなもんかな？？
   *
   * propsは、this.XXX みたいなアクセスはできないけど、 dataは this.XXXみたいなアクセスができるってことかな？
   * */
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTodo(e) {
      // 本来はsubmitイベントを呼び出しているが、本来のsubmitとしてのイベントは不要なため preventDefault()でキャンセル。
      e.preventDefault();
      const newTodo = {
        id: v4(),
        title: this.title,
        complated: false,
      };

      this.$emit("add-todo", newTodo);
      this.title = ''
    },
  },
};
</script>


<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
}
</style>