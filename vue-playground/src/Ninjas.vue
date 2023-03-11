<template>
  <div>
    <h1>LIST OF NINJAS</h1>
    <ul>
      <li v-for="(ninja, index) in ninjas" :key="index">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Mario", "Yoshi", "Luigi"],
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
