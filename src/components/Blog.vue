<template> 
    <div class="Blog">
        <div class="container">
          <h1>{{title}}</h1>
          <h1>{{divider1}}</h1>
          
          <h5>{{hobby1}}</h5>
          <br>
          <h5>{{desc1}}</h5>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{hobby2}}</h5>
          <br>
          <h5>{{desc2}}</h5>
          <br>
          <h5>{{divider}}</h5>
          <br>
          <h5>{{hobby3}}</h5>
          <br>
          <h5>{{desc3}}</h5>
          <br>
          <br>
          <h1>{{divider1}}</h1>
    </div>
    </div> 
</template> 
<script> 
    export default { 
            name: 'Blog', 
            data () { 
                return{ 
                    title: 'Achievements',
                    hobby1: 'Best in Computer Typing (2013-2014)',
                    hobby2: 'Dean Lists (2020)',
                    hobby3: 'Dean Lists (2021)',
                   

                    desc1: 'I awarded as the best computer typing during my Elementary days.',
                    desc2: 'I received a special recognition as Deans Lister. ',
                    desc3: 'I received a special recognition as Deans Lister. ',
                    

                    divider: '*************************************************************',
                    divider1: '************************'
                }
            }
    }
</script>

<style>

</style>