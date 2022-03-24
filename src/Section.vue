<template>
   <div class="Section">
      <div class="section__title">{{msg}}</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">{{msg1}}</div>
            <div class="addr">{{msg2}}</div>
            <div class="duration">{{msg3}}</div>
          </div>
          <div class="right">
            <div class="name">{{msg4}}</div>
            <div class="desc">{{msg5}}</div>
          </div>
        </div>
          </div>
        </div>
        
          
</template>
<script>
export default
{
  name: 'Section',
  data () {
    return {
      msg: 'Education',
      msg1: 'Nepomuceno Elem. School',
      msg2: 'Angeles City, Pampanga.',
      msg3: 'June 2007 - April 2013',
      msg4: 'Elementary Student',
      msg5: 'Computer Typing',
    }
  }
}
</script>