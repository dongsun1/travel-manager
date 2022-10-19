<template>
  <section
    class="h-screen d-flex flex-column align-items-center justify-content-center"
  >
    <h1 class="mb-4 text-4xl">회원가입</h1>
    <b-form-input
      class="w-75 mb-2"
      v-model="signup.id"
      placeholder="아이디"
    ></b-form-input>
    <b-form-input
      class="w-75 mb-2"
      v-model="signup.password"
      type="password"
      placeholder="비밀번호"
    ></b-form-input>
    <b-form-input
      class="w-75 mb-2"
      v-model="signup.passwordCheck"
      type="password"
      placeholder="비밀번호 확인"
    ></b-form-input>
    <b-button class="w-75 mb-2" variant="outline-info" @click="onClickLogin">
      가입하기
    </b-button>
    <Alert ref="alert" :text="text" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      signup: {
        id: "",
        password: "",
        passwordCheck: "",
      },
      text: "",
    };
  },
  methods: {
    onClickLogin() {
      const data = [{ id: "a" }];
      const { id: signupId, password, passwordCheck } = this.signup;
      if (data.find(({ id }) => id === signupId)) {
        this.text = "중복된 아이디 입니다.";
        (this.$refs.alert as any).dismissCountDown = 2;
      } else if (password !== passwordCheck) {
        this.text = "비밀번호를 확인해주세요.";
        (this.$refs.alert as any).dismissCountDown = 2;
      }
    },
  },
});
</script>
