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
import uuid from "uuid";

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
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        complated: false,
      };

      this.$emit("add-todo", newTodo);
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