<template>
  <div class="publish">
    <nav-bar left-arrow title="发布" @click-left="back"></nav-bar>

    <h1>Publish</h1>
  </div>
</template>
<script>
    import { NavBar } from 'vant';
  export  default {
      components:{
          NavBar
      },
      methods:{
          back(){
              this.$router.back()
          }
      }
  }

</script>
