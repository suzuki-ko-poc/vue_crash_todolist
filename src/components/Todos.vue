<template>
    <div>
        <!-- // v-bind:key は :keyと省略出来る。 -->
        <div v-for="todo in todos" :key="todo.id">
            <todo-items v-bind:todo="todo"></todo-items>
        </div>
    </div>
</template>

<script>
import TodoItems from './TodoItems.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Todos',
    components: {
        TodoItems
    },
    // QUESTION なぜv-bindで渡したものを propsで持つのだろうか？
    props: ["todos"]

}
</script>

<style scoped>

</style>