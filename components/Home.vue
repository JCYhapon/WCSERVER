<template>
  <div class="Home">
    <title>{{title}}</title>
    
    <div class="container">
          <div class="container-img"> </div>
          <h1>Yhapon, John Carlo </h1>
          <h5>2nd Year Student (Information Technology)</h5>
          <br>
          <p>{{p}} <br> <br> {{p2}}</p>
          <br>
          <br>
          <p>{{Note}}</p>
        </div>
  </div>
</template>

<script>



export default {
  name: 'Home',
  data () {
    return {
      
      
      p: ' I am a 2nd year student at Holy Angel University with a specialization of Website Development. Working student at IJCP Company as an Data Entry.',
      Note: 'Note: This page is minimalist and simple in design cause im trying to experiment on different code of Vue.js',
      
    }
    
  }
}
</script>


<style scoped>

</style>
