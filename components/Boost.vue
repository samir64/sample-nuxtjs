<template>
  <div class="boost-container" @click="openBoost">
    <div class="boost-card boost-back-card"></div>
    <div class="boost-card boost-front-card">
      <div class="boost-content">
        <div class="boost-label">BOOST</div>
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
  transition: margin-top 300ms ease-out;
  cursor: pointer;
}

.boost-container:hover,
.boost-container:hover .boost-front-card {
  margin-top: 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff url("@/static/assets/plus-blue.svg") no-repeat center
    center;
}

.boost-front-card {
  width: 256px;
  height: 133px;
  margin-top: -29px;
  display: flex;
  align-items: stretch;
  transition: margin-top 300ms ease-out;
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
  border: 1px solid #ccd0de;
  border-radius: 13px;
  padding: 6px 12px;
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
