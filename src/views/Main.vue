<template>
  <div>
    <nav-bar title="AND" :fixed="true">
      <div slot="right">
        <router-link to="/service">
          <icon name="service" size="30"/>
        </router-link>
      </div>
    </nav-bar>

    <div class="router-view">
      <!--      <router-view></router-view>-->
      <home v-show="active==0"></home>
      <personal v-show="active==2"></personal>
    </div>

    <tabbar v-model="active" @change="tabbarChange">
      <tabbar-item icon="home-o">Home
      </tabbar-item>
      <tabbar-item icon="plus" to="/publish">Pub
      </tabbar-item>
      <tabbar-item icon="smile-o">Person
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
    import {NavBar, Icon, Tabbar, TabbarItem,} from 'vant';
    import Home from "./Home";
    import Personal from "./Personal";

    export default {
        components: {
            NavBar, Icon, Tabbar, TabbarItem, Home, Personal
        },
        data() {
            return {
                active: 0
            }
        },
        created() {
            this.active = this.$store.state.nav_active;
        },
        methods: {
            tabbarChange(active) {
                if (active === 1) {
                    return
                }
                this.$store.state.nav_active = active;
            }
        }

    };

</script>

<style lang="less">

  .van-nav-bar {
    /*box-shadow: 0px 2px 5px 0px rgba(100,100,100,0.2);*/

    .van-icon {

      &:active {
        color: #0671dc;
      }
    }
  }

  .router-view {
    margin-top: 46px;
    margin-bottom: 50px;
  }

  .van-tabbar-item {
    .van-icon {
    }
  }

</style>
