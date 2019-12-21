<template>
  <div class="personal">
    <div class="header-layout">
      <div v-if="isLogin" class="info-layout">
        <van-img round width="80px" height="80px"/>
        <div class="info">
          <div class="realname">李孟威</div>
          <div class="phone">123********123</div>
          <div class="rank">诚信值:<label class="val">99</label>分
            <icon name="question-o"/>
          </div>

        </div>
      </div>
      <van-btn v-else round type="primary" class="logn-btn">微信登录</van-btn>


    </div>


    <cell-group title="认证">
      <cell title="实名认证" value="未认证" icon="card" is-link/>
      <cell title="车主认证" value="未认证" icon="manager-o" is-link/>
    </cell-group>
    <cell-group title="行程">
      <cell title="我的行程" icon="flag-o" is-link></cell>
      <cell title="我的预约" icon="bookmark-o" is-link></cell>
    </cell-group>
    <cell-group title="其他">
      <cell title="手机号" value="未绑定" icon="phone" is-link/>
      <cell title="常用地址" value="修改" icon="location-o" is-link/>
    </cell-group>
  </div>

</template>

<script>
    import {Button, Cell, CellGroup, Image, Icon} from 'vant'

    export default {
        data() {
            return {
                isLogin: true
            }
        },
        components: {
            "van-btn": Button, Cell, CellGroup, "van-img": Image, Icon
        }
    }

</script>

<style lang="less">
  .personal {

    .header-layout {
      width: 100%;
      min-height: 160px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      .logn-btn {
        width: 100px;
      }

      .info-layout {
        width: 80%;
        display: flex;
        align-items: flex-start;

        .info {
          margin-left: 10px;

          div {
            margin-bottom: 8px;
          }

          .realname {
            font-weight: bold;
          }

          .rank {
            display: flex;
            align-items: center;
            color: #666666;

            .val {
              color: #1989fa;
              margin-left: 5px;
              margin-right: 5px;
            }

            .van-icon {
              color: #ff6034;
              margin-left: 5px;
            }

          }
        }
      }
    }

  }

</style>
