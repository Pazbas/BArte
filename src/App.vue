<template>
  <Navbar />
  <div class="container py-5">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer }
};
</script>
