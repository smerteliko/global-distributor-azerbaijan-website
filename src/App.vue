<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
  import Footer from '@/components/FooterComponent.vue';
  import Header from '@/components/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
  };
</script>

<style>
  body {
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }
</style>
