<template>
    <div>
        <!-- // v-bind:key は :keyと省略出来る。 -->
        <div v-for="todo in todos" :key="todo.id">
            <h2>{{todo.title}}</h2>
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Todos',
    components: {
    },
    // QUESTION なぜv-bindで渡したものを propsで持つのだろうか？
    props: ["todos"]

}
</script>

<style scoped>

</style>