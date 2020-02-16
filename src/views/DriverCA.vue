<template>
  <div class="dca">
    <nav-bar left-arrow title="车主认证" @click-left="back" :fixed="true"/>

    <div class="form-layout">
      <div class="item">
        <label>车辆型号</label>
        <field
          v-model="carname"
          type="text"
          placeholder="别克GL8"
        />
      </div>
      <div class="item">
        <label>车牌号码</label>
        <field
          v-model="carid"
          type="text"
          placeholder="例：豫A88888"
        />
      </div>


    </div>

    <div class="upload-layout">
      <div class="title">上传证件</div>
      <div class="upload-wrapper">
        <div>
          <uploader/>
          <div>行驶证</div>
        </div>
        <div>
          <uploader/>
          <div>驾驶证</div>
        </div>
      </div>

    </div>

    <div style="text-align: center;margin-bottom: 20px">
      <van-btn size="large" type="info" class="pubbtn" @click="doPub">提交</van-btn>
    </div>


  </div>
</template>
<script>
  import {
    NavBar,
    ActionSheet,
    Button,
    Popup,
    Field,
    Uploader
  } from 'vant';


  export default {
    data() {
      return {
        carname: '',
        carid: '',
        idcard1: '',
        idcard2: ''
      };
    },
    components: {
      NavBar,
      ActionSheet,
      'van-btn': Button,
      Popup,
      Field,
      Uploader
    },
    created() {

    },
    methods: {
      doPub() {
        alert('发布');
      },
      back() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="less" scoped>
  .dca {
    height: 100%;
    overflow-y: scroll;
  }

  .form-layout {
    margin-top: 60px;
    background-color: white;
    border-radius: 5px;
    padding: 10px;

    .item {
      margin-top: 10px;

      label {
        width: 80px;
        text-align: right;
        flex-shrink: 0;
        margin-right: 15px;
      }

      .van-cell {
        padding: 0px;
      }

      .area-item {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
      }

      display: flex;
      align-content: center;
    }
  }

  .upload-layout {
    font-size: 14px;

    .title {
      color: #555;
      margin: 15px;
    }

    .upload-wrapper {
      display: flex;
      justify-content: space-around;
      text-align: center;
      background-color: white;
      padding: 10px;
    }
  }

  .van-uploader__upload {
    margin: 0;
  }

  .pubbtn {
    margin-top: 20px;
    border-radius: 5px;
    width: 90%;
  }

  .switcher {
    text-align: center;

    &:active {
      .van-icon {
        color: #1989fa;
      }
    }
  }
</style>
