<template>
  <div class="routes">
    <nav-bar left-arrow title="a-b" @click-left="back"></nav-bar>
  </div>

</template>

<script>
    import {Button, Cell, CellGroup, Image, Icon,NavBar} from 'vant'
    export default {
        data() {
            return {
                isLogin: true
            }
        },
        components: {
            "van-btn": Button, Cell, CellGroup, "van-img": Image, Icon,NavBar
        },
        methods:{
            back(){
                this.$router.back()
            }
        }
    }

</script>

<style lang="less">
  .routes {


  }

</style>
