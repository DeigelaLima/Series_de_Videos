<template>
  <div id="app">
      <Header />
      <Home />
      <!-- <router-view path="$router.key" /> -->
      <Footer />
  </div>
</template>


<script>

import './styles/global.css';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './pages/Home.vue';
  

export default {
  name: 'App',
  components:{
    Header,
    Home,
    Footer
  }
}
</script>





