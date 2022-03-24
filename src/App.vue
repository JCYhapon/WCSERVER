<template>
<div class="container">
  <div class="header">
    <div class="full-name">
      <span class="first-name">John Carlo</span> 
      <span class="last-name">Yhapon</span>
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">yhaponjc@gmail.com</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">0998-939-7465</span>
    </div>
    
    <div class="about">
      <span class="position">2nd Year Student (Information Technology) </span>
      <span class="desc">
        I am a 2nd year student at Holy Angel University with a specialization of Website Development. Working student at IJCP Company as an Data Entry.
      </span>
    </div>
  </div>
  <div>
    <Details></Details>
  </div>
  <br>
  <div>
    <Section></Section>
  </div>
  <br>
  <div>
    <Section1></Section1>
  </div>
  <br>
  <div>
    <Section2></Section2>
  </div>
  <br>
  <div>
    <Section3></Section3>
  </div>
  <br>
  <div>
    <Section4></Section4>
  </div>
  
</div>
</template>

<script>
import Details from './Details.vue'
import Section from './Section.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
export default {
  components: {
    Details,
    Section,
    Section1,
    Section2,
    Section3,
    Section4
  },
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;  
}

body {
  min-height: 100%;  
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;   
  background: #fff;
  margin: 0px auto 0px; 
  box-shadow: 1px 1px 2px #DAD7D7;
  border-radius: 3px;  
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
  
}.full-name {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  
  .first-name {
    font-weight: 700;
  }
  
  .last-name {
    font-weight: 300;
  }
  
  .contact-info {
    margin-bottom: 20px;
  }
  
  .email ,
  .phone {
    color: #999;
    font-weight: 300;
  } 
  
  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  
  .position {
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
  }



.details {
  line-height: 20px;
  
}.section {
    margin-bottom: 40px;  
  }
  
  .section:last-of-type {
    margin-bottom: 0px;  
  }
  
  .section__title {
    letter-spacing: 2px;
    color: #586de2;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  .section__list-item {
    margin-bottom: 40px;
  }
  
  .section__list-item:last-of-type {
    margin-bottom: 0;
  }
  
  .left ,
  .right {
    vertical-align: top;
    display: inline-block;
  }
  
  .left {
    width: 60%;    
  }
  
  .right {
    text-align: right;
    width: 39%;    
  }
  
  .name {
    font-weight: bold;
  }
  
  a {
    text-decoration: none;
    color: rgb(138, 67, 67);
    font-style: italic;
  }
  
  a:hover {
    text-decoration: underline;
    color: #000;
  }
    
  .skills__item {
    margin-bottom: 10px;  
  }
  
.skills__item .right 
    input {
      display: none;
    }
  
    
    label {
      display: inline-block;  
      width: 20px;
      height: 20px;
      background: #C3DEF3;
      border-radius: 20px;
      margin-right: 3px;
    }
    
    input:checked + label {
      background: #d81010;
    }
</style>
