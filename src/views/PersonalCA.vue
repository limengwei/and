<template>
  <div class="pca">
    <nav-bar left-arrow title="实名认证" @click-left="back" :fixed="true"/>

    <div class="form-layout">
      <div class="item">
        <label>真实姓名</label>
        <field
          v-model="realname"
          type="text"
          placeholder="请输入真实姓名"
        />
      </div>
      <div class="item">
        <label>身份证号</label>
        <field
          v-model="idnumber"
          type="text"
          placeholder="请输入身份证号"
        />
      </div>


    </div>

    <div class="upload-layout">
      <div class="title">上传身份证件</div>
      <div class="upload-wrapper">
        <div>
          <uploader/>
          <div>身份证人像面</div>
        </div>
        <div>
          <uploader/>
          <div>身份证国徽面</div>
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
        realname: '',
        idnumber: '',
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
  .pca {
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
