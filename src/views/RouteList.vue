<template>
  <div class="routes">
    <nav-bar
      left-arrow
      title="a-b"
      @click-left="back"
      :fixed="true"
    />
    <pull-refresh
      v-model="isRefreshing"
      @refresh="onRefresh"
      class="listview"
    >
      <list v-model="isLoading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
      >

        <div class="item" v-for="(item,i) in list"
             :key="i"
        >
          <div class="row">
            <label>起点</label>驻马店
          </div>
          <div class="row">
            <label>终点</label>郑州
          </div>
          <div class="row">
            <label>路线</label>从xxx出发，途经xxx，xxx，xxx，到xxx下高速，途经xxx
          </div>
          <div class="row" style="align-items: flex-end">
            <label>时间</label>02-16 18:30
          </div>
          <div class="row" style="align-items: flex-end">
            <label>余座</label>1个
          </div>
          <div class="row">
            <label>A费</label>50元
          </div>
          <div class="row" style="justify-content: flex-end">
            <a href="tel:10086">
              <van-btn plain icon="phone-o" size="small" type="info" style="margin-right: 10px"></van-btn>
            </a>

            <van-btn plain size="small" type="info" @click="yuyue">预约</van-btn>
          </div>
        </div>
      </list>
    </pull-refresh>
  </div>
</template>

<script>
  import {
    Button, Cell, CellGroup, Image, Icon, NavBar, PullRefresh, List
  } from 'vant';

  export default {
    components: {
      'van-btn': Button,
      Cell,
      CellGroup,
      'van-img': Image,
      Icon,
      NavBar,
      PullRefresh,
      List
    },
    data() {
      return {
        isRefreshing: false,
        isLoading: false,
        finished: false,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      };
    },
    methods: {
      yuyue() {
        alert('预约');

      },
      onRefresh() {
        setTimeout(() => {
          this.isRefreshing = false;
        }, 1000);
      },

      onLoad() {
        setTimeout(() => {
          this.finished = true;
        }, 1000);
      },
      back() {
        this.$router.back();
      },
    },
  };

</script>
s
<style lang="less">
  .routes {
    height: 100%;


    .listview {
      margin-top: 40px;
      overflow-y: auto;
      background-color: white;
      height: calc(100% - 40px);

      .item {
        margin: 20px;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgba(158, 158, 158, 0.5);
        border-radius: 5px;
        padding: 10px;

        .row {
          margin-top: 5px;
          display: flex;
          font-size: 13px;
          color: #555;

          label {
            margin-right: 10px;
            flex-shrink: 0;
            font-weight: bold;
          }
        }
      }
    }

  }

</style>
