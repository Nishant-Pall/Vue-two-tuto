<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Ninjas from "./components/Ninjas.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "app-ninjas": Ninjas,
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "Ninja app",
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
h1 {
  color: green;
}
</style>
