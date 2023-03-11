<template>
    <div id="ninjas">
        <h1>LIST OF NINJAS</h1>
        <ul>
            <li
                v-for="(ninja, index) in ninjas"
                :key="index"
                v-on:click="ninja.show = !ninja.show"
            >
                <p>{{ ninja.name }}</p>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // props: ["ninjas"],
    // we can add type checking on props, as well as required param
    props: {
        ninjas: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
#ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
h1 {
    color: purple;
}
</style>
