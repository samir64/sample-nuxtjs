<template>
  <div class="main-container">
    <div v-for="(boost, index) in boosts" :key="index">
      <Boost v-if="index !== id" :counter="boost.liking" :id="index" />
      <CreateBoost
        v-if="index === id"
        :id="index"
        :from="boost.from"
        :to="boost.to"
      />
    </div>
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
  asyncData({ params }) {
    return {
      id: parseInt(params.id)
    };
  },
  computed: {
    boosts() {
      return this.$store.state.boosts;
    }
  }
};
</script>
