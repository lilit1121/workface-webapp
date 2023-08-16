<template>
  <div class="cartItem">
    <clientOnly>
      <div>
        <img :src="icon" alt="Employee" />
        <p></p>
      </div>
    </clientOnly>

    <input type="radio" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  
 
};
</script>

<style lang="scss" scoped></style>
