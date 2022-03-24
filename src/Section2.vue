<template>
   <div class="Section2">
          <div class="left">
            <div class="name">{{msg}}</div>
            <div class="addr">{{msg1}}</div>
            <div class="duration">{{msg2}}</div>
          </div>
          <div class="right">
            <div class="name">{{msg3}}</div>
            <div class="desc">{{msg4}}</div>
          </div>
      </div>

</template>
<script>
export default
{
  name: 'Section2',
  data () {
    return {
      msg: 'Holy Angel University',
      msg1: 'Angeles City, Pampanga.',
      msg2: 'June 2019 - Feb 2024',
      msg3: 'College Student',
      msg4: 'Learning Java, Python, HTML, CSS',
    }
  }
}
</script>