<template>
  <div class="create-boost-container">
    <div class="create-boost-card create-boost-back-card">
      <img src="@/static/assets/plus-gray.svg" />
    </div>
    <div class="create-boost-card create-boost-front-card">
      <div class="create-boost-content">
        <b-button
          pill
          variant="light"
          class="button create-boost-label"
          @click="createBoost"
          >CREATE BOOST</b-button
        >
        <div class="dash-line">
          <div class="create-boost-splitter-label">
            Date Period
          </div>
        </div>
        <div class="create-boost-date-content">
          <div class="create-boost-date-title">Pick Date Range:</div>
          <div class="create-boost-date-range">
            <div class="create-boost-date">
              <div class="create-boost-date-text" @click="openFromCalendar">
                {{ dateRange.from }}
              </div>
              <b-calendar
                v-if="calendarOptions.from.show"
                v-model="calendarOptions.from.date"
                @selected="onFromSelected"
                locale="en-US"
                class="create-boost-date-calendar"
              ></b-calendar>
            </div>
            <div class="create-boost-date-range-to-label">
              TO
            </div>
            <div class="create-boost-date">
              <div class="create-boost-date-text" @click="openToCalendar">
                {{ dateRange.to }}
              </div>
              <b-calendar
                v-if="calendarOptions.to.show"
                v-model="calendarOptions.to.date"
                @selected="onToSelected"
                locale="en-US"
                class="create-boost-date-calendar"
              ></b-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.create-boost-container {
  margin: 0 29px;
}

.create-boost-card {
  border-radius: 8px 8px 0 0;
}

.create-boost-back-card {
  background-color: #4f5bd5;
  width: 232px;
  height: 40px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-boost-front-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  width: 256px;
  height: 300px;
  margin-top: -1px;
  display: flex;
  align-items: stretch;
}

.create-boost-content {
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.create-boost-label {
  color: #4f5bd5 !important;
  border-color: #4f5bd51f !important;
  align-self: center;
  font: normal normal normal 1.1em Arial;
}

.dash-line {
  border-top: 1px dashed #a6acba;
  height: 0;
  margin-top: 30.5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-boost-splitter-label {
  font: normal normal normal 1.2em Arial;
  background-color: #ffffff;
  color: #a6acba;
  padding: 0 8px;
}

.create-boost-date-content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  font: normal normal normal 1.2em Arial;
  color: #3c3c3c;
}

.create-boost-date-title {
  align-self: center;
}

.create-boost-date-range {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.create-boost-date-range-to-label {
  color: #3c3c3c80;
  margin: 0 14px;
}

.create-boost-date {
  padding: 0 2px 4px !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  border: none !important;
  border-bottom: 1px solid #707070 !important;
  font: normal normal normal 1.4em Arial !important;
  color: #3c3c3c !important;

  position: relative;
}

.create-boost-date-text {
  cursor: pointer;
}

.create-boost-date-text > button {
  width: 0 !important;
  padding: 0 !important ;
  margin: 0 !important ;
}

.create-boost-date-text > button * {
  display: none;
}

.create-boost-date-text > label {
  padding: 0 !important;
  margin: 0 !important;
  line-height: 1em !important;
  min-height: auto !important;
}

.create-boost-date-calendar {
  position: absolute;
  left: 0;
  top: 1em;
  z-index: 999;
}

.create-boost-date-calendar .b-calendar-nav {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
}
</style>

<script>
export default {
  props: {
    id: Number,
    from: { type: String, default: "2020/09/10" },
    to: { type: String, default: "2020/09/10" }
  },
  data() {
    return {
      dateRange: {
        from: this.from,
        to: this.to
      },
      calendarOptions: {
        from: {
          show: false,
          date: new Date()
        },
        to: {
          show: false,
          date: new Date()
        }
      }
    };
  },
  methods: {
    createBoost() {
      this.$store.commit("boosts/add", {
        id: this.id,
        from: this.dateRange.from,
        to: this.dateRange.to
      });
      this.$router.push("/");
    },
    openFromCalendar() {
      this.calendarOptions.to.show = false;
      this.calendarOptions.from.show = true;
    },
    openToCalendar() {
      this.calendarOptions.from.show = false;
      this.calendarOptions.to.show = true;
    },
    onFromSelected(ymd, date) {
      this.dateRange.from = ymd.replace(/-/g, "/");
      this.calendarOptions.from.show = false;
    },
    onToSelected(ymd, date) {
      this.dateRange.to = ymd.replace(/-/g, "/");
      this.calendarOptions.to.show = false;
    }
  }
};
</script>
