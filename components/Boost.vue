<template>
  <div class="boost-container">
    <div class="boost-card boost-back-card"></div>
    <div class="boost-card boost-front-card">
      <div class="boost-content">
        <b-button
          pill
          variant="outline-secondary"
          class="button boost-label"
          @click="openBoost"
          >BOOST</b-button
        >
        <div class="boost-description">
          <div class="boost-like-label">LIKING</div>
          <div class="boost-like-counter">{{ counter }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.boost-container {
  margin: 29px;
}

.boost-card {
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  border: 1px solid #eaeaea;
}

.boost-back-card {
  width: 232px;
  height: 40px;
  margin-left: 12px;
}

.boost-front-card {
  width: 256px;
  height: 133px;
  margin-top: -30px;
  display: flex;
  align-items: stretch;
}

.boost-content {
  margin: 24px 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
}

.boost-label {
  color: #ccd0de !important;
  border-color: #ccd0de !important;
  align-self: start;
  font: normal normal normal 1.1em Arial;
}

.boost-description {
  color: #3c3c3c;
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
}

.boost-like-label {
  font: normal normal normal 1.6em Arial;
}

.boost-like-counter {
  font: normal normal normal 2.6em Arial;
  font-weight: bolder;
}
</style>

<script>
export default {
  props: {
    id: Number,
    counter: { type: Number, default: 0 }
  },
  data() {
    return {};
  },
  methods: {
    openBoost() {
      this.$router.push(`/boost/${this.id}`);
    }
  }
};
</script>
