<template>
   <div class="Details" id="Details"> 
    <div class="section" id="section">
      <div class="section__title" id="section_title">{{msg}}</div>
      <div class="section__list" id="section__list">
        <div class="section__list-item" id="section__list-item">
          <div class="left" id="left">
            <div class="name" id="name"> {{msg1}}</div>
            <div class="addr" id="addr">{{msg2}}</div>
            <div class="duration" id="duration">{{msg3}}</div>
          </div>
          <div class="right" id="right">
            <div class="name" id="name">{{msg4}}</div>
            <div class="desc" id="desc">{{msg5}}</div>
          </div>
        </div>
        </div>
        </div>
        </div>
</template>
<script>
export default
{
  name: 'Details',
  data () {
    return {
      msg: 'Experience',
      msg1: 'IJCP Company',
      msg2: 'Davao City, PH.',
      msg3: 'January 2019',
      msg4: 'Data Entry',
      msg5: 'Replied to customers concerns and needs.',
    }
  }
}
</script>
