<script setup>

defineProps({
  foodItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="foodcard">
    <img :src="foodItem.img" alt=""/>
    <aside>
      <h3 class="name">{{ foodItem.name }}</h3>
      <p class="description">{{ foodItem.description }}</p>
    </aside>


  </section>

  <!--  const paramId = rout.params.id;-->
  <!--  const student = studentData.data.filter(student=> student.id === paramId)[0]-->
  <!--   const goToFoodDetails = -->
  <!--path: -->

  <!--  name:-->
  <!--  component-->
  <!--  meta: {-->
  <!--  title: "Foods"-->
  <!--  -->
  <!--  <router-link :to="{name: 'foodDetails', params: { details.id: ''}}"></router-link>-->
  <!--  -->
  <!--  router.push({-->
  <!--  name: 'FoodDetails',-->
  <!--  @click=goToFoodDetails (foodInfo.id)' -->
  <!--  I need something with const in it but i didn't get the code-->

</template>

<style scoped>
section.foodcard {
  max-width: 100%;

  img {
    width: 200px;
    height: 200px;
  }

  display: flex;
  border: 1px solid green;
  border-radius: 12px;
  padding: 0.5rem;
  flex-direction: row;
  text-align: left;
  //align-content: start;

}


@media screen and (width >= 600px) {

  section.foodcard {
    max-width: 100%;
  img {
    width: 185px;
    height: 100px;
    //padding: 1rem;
  }
    width: 185px;
    display: flex;
    //flex-direction: column;
    flex-wrap: wrap;
    //column-count: 3;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
}


@media screen and (width >= 1000px) {

  section.foodcard {
    max-width: 100%;
  img {
    width: 315px;
    height: 185px;
    //padding: 1rem;
  }
    width: 315px;
    //height: 560px;
    display: flex;
    flex-wrap: wrap;
    //flex-direction: column;
    //column-count: 4;
    //justify-content: space-between;
    justify-items: center;
    align-items: center;
    text-align: center;
  }
}

</style>