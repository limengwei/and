<template>
  <div class="main">
    <nav-bar
      title="AND"
      :fixed="true"
    >
      <div slot="right">
        <router-link to="/service">
          <icon
            name="service"
            size="20  "
          />
        </router-link>
      </div>
    </nav-bar>

    <div class="router-view">
        <home v-show="active==0"/>
        <personal v-show="active==1"/>
    </div>

    <tabbar
      v-model="active"
      @change="tabbarChange"
    >
      <tabbar-item icon="home-o">Home</tabbar-item>
      <div @click="tabbarChange(-1)" style="display: flex;justify-content: center;align-items: center">
        <icon
          name="plus"
          size="25"
        />
      </div>
      <tabbar-item icon="smile-o">Person</tabbar-item>
    </tabbar>

    <!--  发布说明-->
    <action-sheet v-model="pubalert" :round="false">
      <div class="action-content">
        <div class="title">发布行程条件</div>
        <h3>准备资料</h3>
        <ul>
          <li>身份证、驾驶证、行驶证</li>
        </ul>
        <h3>车主要求</h3>
        <ul>
          <li>年龄18+</li>
          <li>准驾车型</li>
          <li>无犯罪记录</li>
        </ul>
        <h3>车辆要求</h3>
        <ul>
          <li>非营运车辆</li>
          <li>七座及以下</li>
        </ul>

        <van-btn size="large" type="info" class="search" @click="pubalert=false">知道了</van-btn>
      </div>
    </action-sheet>
  </div>
</template>
<script>
  import {
    NavBar, Icon, Tabbar, TabbarItem, ActionSheet, Button
  } from 'vant';
  import Home from './Home';
  import Personal from './Personal';

  export default {
    components: {
      NavBar,
      Icon,
      Tabbar,
      TabbarItem,
      Home,
      Personal,
      ActionSheet,
      'van-btn': Button,
    },
    data() {
      return {
        pubalert: false,
        driver: true,
        active: 0,
      };
    },
    created() {
      this.active = this.$store.state.nav_active;
    },
    methods: {
      tabbarChange(active) {
        if (active === -1) {
          if (!this.driver) {
            this.pubalert = true;
            return;
          }
          this.$router.push('/publish');
          return;
        }
        this.$store.state.nav_active = active;
      },
    },

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

  .main {
    height: 100%;
  }

  .router-view {
    margin-top: 46px;
    margin-bottom: 50px;
    height: calc(100% - 96px);
  }

  .van-tabbar-item {
    .van-icon {

    }
  }

  .action-content {
    padding: 20px;

    .title {
      text-align: center;
      font-size: 26px;
    }
  }

</style>
