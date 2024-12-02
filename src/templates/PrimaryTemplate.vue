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
        breadcrumbs
      </div>

      <cta-button class="order-online" btn-copy="Order Online"/>

      <div class="logo">
        <router-link :to="{ name: 'home' }"><img src="../../src/assets/logo-web.png" alt="logo"/></router-link>
      </div>
    </header>

    <section class="main">
      <slot></slot>
    </section>

    <footer>
      <!--      <div class="copyright">Main Dishes</div>-->
      <!--      <div class="back-to-top">Go to top of page</div>-->
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

      .logo {
        order: 2;
      }

      .order-online {
        display: unset;
        order: 4;
      }
    }
    .content {
      //color: white;

      h1 {
        //font-size: 64px;
        //font-style: normal;
        //font-weight: 900;
        //line-height: 65px; /* 101.563% */
        //text-transform: uppercase;
      }
      h3 {
        //font-size: 32px;
        //font-style: normal;
        //font-weight: 350;
        //line-height: 40px; /* 125% */
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
    .content {
      //color: white;

      h1 {
        //font-size: 64px;
        //font-style: normal;
        //font-weight: 900;
        //line-height: 65px; /* 101.563% */
        //text-transform: uppercase;
      }
      h3 {
        //font-size: 32px;
        //font-style: normal;
        //font-weight: 350;
        //line-height: 40px; /* 125% */
      }
    }
  }

}
</style>