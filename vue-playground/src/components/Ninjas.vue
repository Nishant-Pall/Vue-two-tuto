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
  data() {
    return {
      ninjas: [
        { name: "Yoshi", speciality: "HTML", show: false },
        { name: "Mario", speciality: "JS", show: false },
        { name: "Ryuk", speciality: "CSS", show: false },
        { name: "Luigi", speciality: "Webpack", show: false },
        { name: "Luigi", speciality: "Webpack", show: false },
        { name: "Luigi", speciality: "Webpack", show: false },
      ],
    };
  },
};
</script>

<style scoped>
#ninjas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
ul {
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: solid 2px black;
  margin: 10px;
}
h1 {
  color: purple;
}
</style>
