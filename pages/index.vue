<template>
  <div class="main-container">
    <Boost
      v-for="(boost, index) in boosts"
      :key="index"
      :counter="boost.liking"
      :id="index"
    />
  </div>
</template>

<style>
body,
html {
  background-color: #f8f8f8;
  font-size: 10px;
}

.main-container {
  padding: 190px 128px;
  display: flex;
}

.button {
  padding: 6px 12px !important;
}
</style>

<script>
export default {
  computed: {
    boosts() {
      return this.$store.state.boosts;
    }
  }
};
</script>
