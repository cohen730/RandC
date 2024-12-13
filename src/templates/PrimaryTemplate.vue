<script setup>
import CtaButton from "../components/CtaButton.vue";
</script>

<template>
  <section class="primary-template">
    <header>
      <div class="top-nav">
        <router-link :to="{ name: 'menu' }">Menu</router-link>
        <router-link :to="{ name: 'gallery' }">Gallery</router-link>
        <router-link :to="{ name: 'catering' }">Catering</router-link>
        <router-link :to="{ name: 'about' }">About Us</router-link>
      </div>

      <div class="breadcrumbs">
        <img src="../../src/assets/breadcrumbs.svg" alt="breadcrumbs">
      </div>

      <cta-button class="order-online" btn-route="menu" btn-copy="Order Online"/>

      <div class="logo">
        <router-link :to="{ name: 'home' }"><img src="../../src/assets/catalinaslogo-02.svg" alt="logo"/></router-link>
      </div>
    </header>

    <section class="main">
      <slot></slot>
    </section>

    <footer>
    </footer>
  </section>
</template>

<style scoped>
/* Mobile first */
section.primary-template {

  header {
    height: 10vh;
    border: 1px solid white;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .breadcrumbs {
      display: unset;
      width: 5%;
    }

    .logo {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    a {
      color: white;
    }

    .top-nav, .order-online {
      display: none;
    }
  }

  .main {
  }


  /* Tablet and up */
  @media screen and (width >= 600px) {
    header {

      .breadcrumbs {
        display: unset;
        width: 5%;
      }

      .logo {
        order: 2;
      }

      .order-online {
        display: unset;
        order: 4;
      }
    }

  }

  /* Desktop and up */
  @media screen and (width >= 1000px) {
    header {
      .breadcrumbs {
        display: none;
      }

      .top-nav {
        display: block;

        a {
          margin: 10px;
        }
      }
    }

  }

}
</style>