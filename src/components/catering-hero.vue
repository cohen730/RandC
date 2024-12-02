<script setup>

</script>

<template>
  <section class="hero">
    <div class="content">
      <h1>Catering</h1>
      <h3></h3>

    </div>
  </section>
</template>

<style scoped>
/* Mobile first */
section.hero {
  background-image: url("../assets/hero-catering.png");
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid yellow;
  position: relative;
  padding: 0 1rem 2rem;

  .content {
    color: white;
    position: absolute;
    bottom: 3rem;

  }

  /* Tablet and up */
  @media screen and (width >= 600px) {
    height: 600px;
  }

  /* Desktop and up */
  @media screen and (width >= 1000px) {
    height: 550px;

    .content {
      bottom: 3rem;
      right: 1rem;
      width: 40%;
    }
  }
}
</style>