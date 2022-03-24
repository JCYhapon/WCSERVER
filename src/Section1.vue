 <template>
 <div class="Section1">
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
  name: 'Section1',
  data () {
    return {
      msg: 'Holy Angel University',
      msg1: 'Angeles City, Pampanga.',
      msg2: 'June 2014 - Feb 2019',
      msg3: 'High School Student',
      msg4: 'Learning some C++',
    }
  }
}
</script>