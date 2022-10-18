<template>
  <section>
    <h1>Travel Manager</h1>
    <b-form-input v-model="login.id" placeholder="아이디"></b-form-input>
    <b-form-input
      v-model="login.password"
      placeholder="비밀번호"
    ></b-form-input>
    <b-button variant="info">로그인</b-button>
    <hr />
    <b-button variant="info">회원가입</b-button>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      login: {
        id: "",
        password: "",
      },
    };
  },
});
</script>
