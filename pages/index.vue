<template>
  <section>
    <top-bar />
    <div class="h-screen d-flex flex-column">
      <div class="bg-green-200 w-100 h-80">map</div>
      <div class="accordion h-100 mt-1 mb-1 overflow-auto" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info">
              첫째 날
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                I start opened because
                <code>visible</code>
                is
                <code>true</code>
              </b-card-text>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info">
              둘째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info">
              셋째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="info">
              넷째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="info">
              다섯째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="info">
              다섯째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="info">
              다섯째 날
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>123</b-card-text>
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
export default Vue.extend({
  components: { TopBar },
});
</script>
