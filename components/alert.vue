<template>
  <b-alert
    class="w-75 position-absolute text-center"
    style="bottom: 20%"
    :show="dismissCountDown"
    fade
    variant="warning"
    @dismissed="dismissCountDown = 0"
    @dismiss-count-down="countDownChanged"
  >
    {{ text }}
  </b-alert>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: { type: String, default: "", required: true },
  },
  data() {
    return {
      dismissSecs: 2,
      dismissCountDown: 0,
    };
  },
  methods: {
    countDownChanged(dismissCountDown: number) {
      this.dismissCountDown = dismissCountDown;
    },
  },
});
</script>
