<template>
   <div class="Section3">
      <div class="section__title">{{msg}}</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">{{msg1}}</div>
           <div class="text">{{msg2}}</div>
         </div>
         </div>
         </div>
</template>
<script>
export default
{
  name: 'Section3',
  data () {
    return {
      msg: 'Achievements',
      msg1: 'Best in Computer Typing (2013-2014)',
      msg2: 'I awarded as the best computer typing during my Elementary days.',
     
    }
  }
}
</script>