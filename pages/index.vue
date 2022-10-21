<template>
  <section>
    <top-bar />
    <div class="h-screen d-flex flex-column">
      <div class="bg-green-200 w-100 h-1/3">map</div>
      <div
        class="accordion h-2/3 mt-1 mb-1 overflow-auto border"
        role="tablist"
      >
        <b-card
          v-for="[index, { title, places }] in Object.entries(scheduleData)"
          no-body
          class="mb-1"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle="`accordion-${index}`"
              variant="outline-info"
            >
              {{ title }}
            </b-button>
          </b-card-header>
          <b-collapse
            :id="`accordion-${index}`"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="d-flex flex-column justify-content-around p-1">
              <b-card-text v-for="place in places">
                <h4>{{ place }}</h4>
              </b-card-text>
              <b-button
                class="w-100"
                variant="outline-info"
                @click="addPlace(index)"
              >
                장소 추가
              </b-button>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <div class="w-100 d-flex justify-content-around mb-2">
        <b-button class="w-48" variant="outline-info">날짜 변경</b-button>
        <b-button class="w-48" variant="outline-info">일정 확정</b-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import TopBar from "~/components/top-bar.vue";

import ScheduleData from "~/types/schedule";

export default Vue.extend({
  components: { TopBar },
  data() {
    return {
      scheduleData: {
        "1": {
          title: "첫째 날",
          places: ["협재해수욕장"],
        },
        "2": {
          title: "둘째 날",
          places: ["협재해수욕장"],
        },
        "3": {
          title: "셋째 날",
          places: ["협재해수욕장"],
        },
        "4": {
          title: "넷째 날",
          places: ["협재해수욕장"],
        },
      } as ScheduleData,
    };
  },
  methods: {
    addPlace(index: string) {
      this.scheduleData[index].places.push("협재해수욕장");
    },
  },
});
</script>
