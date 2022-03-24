<template>
  <div class="Section4">
                    <div class="name">{{msg}}</div>
           <div class="text"> {{msg1}}</div>
           <br>
           <div class="section__title">{{msg2}}</div>
           <div class="name">{{msg3}}</div>
           <div class="name">{{msg4}}</div>
           <br>
           
           <div class="section__title">{{msg5}}</div>
           <div class="section__list-item">{{msg6}}</div>
         </div>
</template>
<script>
export default
{
  name: 'Section3',
  data () {
    return {
      msg: 'Dean Lists (2020)',
      msg1: 'I received a special recognition as Deans',
      msg2: 'Skills',
      msg3: 'CSS',
      msg4: 'HTML',
      msg5: 'Interest',
      msg6: 'Volleyball, Forex Trading, Crypto, Watching Anime.',
    }
  }
}
</script>