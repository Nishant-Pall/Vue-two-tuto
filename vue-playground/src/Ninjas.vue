<template>
  <ul>
    <li v-for="(ninja, index) in ninjas" :key="index">{{ ninja }}</li>
  </ul>
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

<style>
</style>
