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
      <h3 class="name">{{foodItem.name}}</h3>
      <p class="description">{{foodItem.description}}</p>
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

}


@media screen and (width >= 600px) {
  img {
    width: 200px;
    height: 200px;
    //padding: 1rem;
  }
  section.foodcard {
    //max-width: 100%;
    width: 200px;
  //flex-direction: column;
    flex-wrap: wrap;
    column-count: 3;
  justify-content: space-between;
    align-items: center;
    text-align: center;
  }
}


@media screen and (width >= 1000px) {
  img {
    width: 360px;
    height: 360px;
    //padding: 1rem;
  }
  section.foodcard {
    //max-width: 100%;
    width: 360px;
    height: 560px;
    //flex-direction: column;
    flex-wrap: wrap;
    column-count: 3;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
}

</style>