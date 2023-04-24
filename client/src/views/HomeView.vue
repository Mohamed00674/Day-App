<template>
<Navbar/>
<Slide/>
<Footer/>
</template>

<script>
import Slide from '../components/Slide.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components :{
    Navbar,Footer,Slide
  }
 
}
</script>
