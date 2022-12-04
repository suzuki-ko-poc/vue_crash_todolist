<template>
    <div>
        <form>
            <input type="text" name="title" placeholder="AddTodo...">
            <input type="submit" value="Submit" class="btn"> 
        </form>
    </div>

</template>


<script>
export default {
  name: "AddTodo",
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