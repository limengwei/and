<template>
  <div class="home">
    <div>
      <swipe
        :autoplay="3000"
        indicator-color="white"
        :height="180"
      >
        <swipe-item @click="toAd">
          <img src="https://cn.vuejs.org/images/logo.png">
        </swipe-item>
        <swipe-item @click="toAd">
          <img src="https://img.yzcdn.cn/vant/logo.png">
        </swipe-item>
      </swipe>
    </div>
    <div class="area-layout">
      <div
        class="area-item"
        @click="showAreaPicker(0)"
      >
        <div class="area">
          {{ area_s }}
        </div>
        <div class="desc">
          选择出发地
        </div>
      </div>
      <icon
        name="exchange"
        @click="switchArea"
      />

      <div
        class="area-item"
        @click="showAreaPicker(1)"
      >
        <div class="area">
          {{ area_e }}
        </div>
        <div class="desc">
          选择目的地
        </div>
      </div>
    </div>

    <van-btn
      size="large"
      type="info"
      class="search"
      @click="toRouteList(-1)"
    >
      查找车主
    </van-btn>

    <div class="lines-layout">
      <div class="title-wrap">
        <icon
          name="fire"
          class="fire"
          size="25"
        />
        热门线路
      </div>

      <div class="lines-wrap">
        <div
          v-for="(item,i) in lineList"
          :key="i"
          class="line-item"
          @click="toRouteList(i)"
        >
          <div>
            <label>郑州</label>
            <icon name="weapp-nav"/>
            <label>洛阳</label>
          </div>
          <label class="tag">99辆</label>
        </div>
      </div>
    </div>

    <popup
      v-model="areaPicker"
      position="bottom"
    >
      <picker
        show-toolbar
        :columns="areaList"
        @cancel="areaPicker = false"
        @confirm="onAreaConfirm"
      />
    </popup>


  </div>
</template>

<script>
  // @ is an alias to /src
  import {
    Swipe, SwipeItem, Button, Picker, Icon, Popup
  } from 'vant';

  export default {
    name: 'Home',
    components: {
      Swipe,
      SwipeItem,
      'van-btn': Button,
      Icon,
      Picker,
      Popup
    },
    data() {
      return {
        areaPickerType: 0, // 0出发地，1目的地
        areaPicker: false,
        area_s: '郑州',
        area_e: '西平',
        areaList: ['郑州', '西平', '许昌', '漯河', '驻马店'],
        lineList: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
      };
    },
    methods: {
      showAreaPicker(type) {
        this.areaPickerType = type;
        this.areaPicker = true;
      },
      onAreaConfirm(value) {
        if (this.areaPickerType === 0) {
          this.area_s = value;
        } else if (this.areaPickerType === 1) {
          this.area_e = value;
        }
        this.areaPicker = false;
      },
      switchArea() {
        const temp = this.area_s;
        this.area_s = this.area_e;
        this.area_e = temp;
      },
      toRouteList(pos) {
        this.$router.push({
          path: '/routelist',
          params: { userId: '123' },
        });
      },
      toAd() {
        this.$router.push({
          path: '/ad',
          params: { userId: '123' },
        });
      },
    },
  };
</script>

<style lang="less" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }

  .van-swipe {
    height: 180px;
  }

  .van-swipe-item {
    background-color: #42b983;

    img {
      width: 100%;
    }
  }

  .area-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    .area-item {
      text-align: center;
      margin: 20px;

      .area {
        font-weight: bold;
      }

      &:active {
        color: #1989fa;
      }

      .desc {
        color: #999;
        font-size: 12px;
      }
    }

    .van-icon {
      font-size: 30px;

      &:active {
        color: #1989fa;
      }
    }
  }

  .van-button {
    &.search {
      margin-top: 20px;
      margin-left: 5%;
      border-radius: 5px;
      width: 90%;
    }
  }

  .lines-layout {
    background-color: white;
    margin-top: 20px;

    .title-wrap {
      display: flex;
      align-items: center;
      color: #666;
      margin: 10px;

      .fire {
        color: #ff8917;
        margin-right: 10px;
      }
    }

    .lines-wrap {
      display: flex;
      flex-wrap: wrap;

      .line-item {
        position: relative;
        padding: 15px 10px;
        margin-bottom: 10px;
        background-color: #e2f1ff;
        justify-content: center;
        width: 42%;
        margin-left: 2%;
        display: flex;
        align-items: center;
        border-radius: 4px;

        .tag {
          position: absolute;
          right: 0;
          top: 5px;
          font-size: 12px;
          color: white;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          background-color: #ff6034;
          text-align: center;
          width: 35px;
        }

        .van-icon {
          margin: 0 5px;
        }

        &:active {
          background-color: #eee;
        }
      }
    }
  }
</style>
