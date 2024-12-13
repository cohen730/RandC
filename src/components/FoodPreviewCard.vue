<script setup>

defineProps({
  foodItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="food-preview-card">
    <img :src="foodItem.img" alt=""/>
    <aside>
      <h3 class="name">{{ foodItem.name }}</h3>
      <p class="description">{{ foodItem.description }}</p>
    </aside>
  </section>

</template>

<style scoped>
section.food-preview-card {
  display: flex;

  flex-direction: row;
  gap: 1rem;
  max-width: 100%;
  align-content: flex-start;
  padding: 0 2rem;

  img {
    padding: .5rem 0;
    width: 200px;
    height: 200px;
    border-radius: 12px;
  }

  border-radius: 12px;
  background-color: #1E1E1E;
  text-align: left;

}


@media screen and (width >= 650px) {
  section.food-preview-card {
    justify-content: center;

    img {
      padding: 1rem 0 0 0;
      width: 185px;
      height: 100px;
    }

    width: 185px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
}

@media screen and (width >= 1000px) {

  section.food-preview-card {
    img {
      width: 315px;
      height: 185px;
    }

    width: 315px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
}
</style>