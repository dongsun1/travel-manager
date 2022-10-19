<template>
  <section
    class="h-screen d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="mb-4 text-4xl">Travel Manager</h1>
    <b-form-input
      class="w-75 mb-2"
      v-model="login.id"
      placeholder="아이디"
    ></b-form-input>
    <b-form-input
      class="w-75 mb-2"
      v-model="login.password"
      placeholder="비밀번호"
    ></b-form-input>
    <b-button class="w-75 mb-2" variant="outline-info" @click="onClickLogin">
      로그인
    </b-button>
    <hr class="w-75 mb-2" />
    <Nuxt-link class="w-75 mb-2" to="/signup">
      <b-button class="w-100" variant="outline-info">회원가입</b-button>
    </Nuxt-link>
    <b-alert
      class="w-75 position-absolute"
      style="bottom: 20%"
      :show="dismissCountDown"
      fade
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      아이디, 비밀번호를 확인해주세요
    </b-alert>
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
      dismissSecs: 2,
      dismissCountDown: 0,
    };
  },
  methods: {
    countDownChanged(dismissCountDown: number) {
      this.dismissCountDown = dismissCountDown;
    },
    onClickLogin() {
      const { id, password } = this.login;
      if (id === "a" && password === "a") this.$router.push({ name: "main" });
      else this.dismissCountDown = this.dismissSecs;
    },
  },
});
</script>
