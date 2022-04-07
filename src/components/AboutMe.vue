<template>
  <div class="AboutMe">
    
     <div class="container">
          <h1>{{title}}</h1>
          <h3>{{divider}}</h3>
          
          <h5>{{fave1}}</h5>
          <h5>{{fave2}}</h5>
          <h5>{{fave3}}</h5>
          <h5>{{fave4}}</h5>
          <h5>{{fave5}}</h5>
          <h5>{{fave6}}</h5>
          <h5>{{fave7}}</h5>
          
         
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      title: 'About Me',
      fave1: '#Flexible',
      fave2: '#Honest',
      fave3: '#Good Samaritan',
      fave4: '#Hardworking',
      fave5: '#Energetic',
      fave6: '#Creative',
      fave7: '#Dependable',
     
      divider: '**********************************************',
      
    }
  }
}
</script>


<style>

</style>