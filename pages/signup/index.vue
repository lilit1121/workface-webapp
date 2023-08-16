<template>
  <div class="signup">
    <div class="signup__container">
      <Logo />
      <h2 class="title">Join as employer or employee</h2>
      <Card/>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import Card from "./components/Card.vue"

export default {
  name: "signup",
  components: {
    Logo, Card
  },
};
</script>

<style lang="scss">
// @import "../assets/style/variables.scss";

.signup {
  width: 100%;
  &__container {
    // max-width: 1280px;
    // width: 100%;
    padding: 0 20px;
    .title {
      color: $primary;
      font-family: Montserrat;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-align: center;
    }
  }
}
</style>
