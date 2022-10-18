<template>
  <section
    class="h-screen d-flex flex-column align-items-center justify-content-center"
  >
    <Nuxt-link class="w-75 mb-2" to="/main">
      <b-button class="w-100" variant="outline-info">로그인</b-button>
    </Nuxt-link>
    <hr class="w-75 mb-2" />
    <Nuxt-link class="w-75 mb-2" to="/signup">
      <b-button class="w-100" variant="outline-info">회원가입</b-button>
    </Nuxt-link>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
