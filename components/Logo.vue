<template>
  <div class="logo">
    <div class="logo__container">
      <img src="../assets/icons/logo.svg" alt="Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 160px;

  &__container {
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }
}
</style>
