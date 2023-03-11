<template>
    <div id="header">
        <h1>HEADER COMPONENT</h1>
        <p>{{ title }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "Vue Ninjas",
        };
    },
};
</script>
<style scoped>
#header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: lightgreen;
}
h1 {
    color: red;
}
</style>