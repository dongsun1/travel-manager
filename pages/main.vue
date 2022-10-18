<template>
  <section>
    <top-bar />
    <div
      class="h-screen d-flex flex-column align-items-center justify-content-center"
    >
      <Nuxt-link class="w-75 mb-2" to="/main">
        <b-button class="w-100" variant="outline-info">일정 추가하기</b-button>
      </Nuxt-link>
      <hr class="w-75 mb-2" />
      <Nuxt-link class="w-75" to="/signup">
        <b-button class="w-100" variant="outline-info">내 일정 보기</b-button>
      </Nuxt-link>
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
