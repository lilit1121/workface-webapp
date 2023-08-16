<template>
  <div class="card">
    <CardItem :icon="icon" />
    <!-- <CardItem/> -->
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "Card",
  components: {
    CardItem,
  },
  data() {
    return {
      icon: "/assets/icons/employerIcon.svg",
      title: "I’m a employee",
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 380px;
  width: 100%;
  padding: 0 20px;
}
</style>
