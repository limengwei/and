<template>
  <div class="publish">
    <nav-bar left-arrow title="发布" @click-left="back" :fixed="true"/>

    <div class="form-layout">
      <div class="item">
        <label>起点</label>
        <div class="area-item" @click="showAreaPicker(0)">
          <div class="area">{{ area_s }}</div>
        </div>
      </div>

      <div class="switcher" @click="switchArea">
        <icon

          name="exchange"
          style="transform:rotate(90deg);"
          size="20"
        />
      </div>

      <div class="item" style="margin-top: 0">
        <label>终点</label>
        <div class="area-item" @click="showAreaPicker(1)">
          <div class="area">{{ area_e }}</div>
        </div>
      </div>

      <div class="item">
        <label>路线</label>
        <field
          v-model="points"
          rows="3"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="例：从xx出发，途经xxx，目的地xxx"
        />
      </div>
      <div class="item">
        <label>车型</label>
        <div class="area-item">
          <div class="area" style="color: #999">别克GL8</div>
        </div>
      </div>
      <div class="item">
        <label>余座</label>
        <div class="area-item" @click="numPicker=true">
          <div class="area">{{ seatNum }}</div>
        </div>
      </div>

      <div class="item">
        <label>时间</label>
        <div class="area-item" @click="timePicker=true">
          <div class="area">{{ startTime||'请选择出发时间' }}</div>
        </div>
      </div>

      <div class="item">
        <label>A费</label>
        <field
          v-model="price"
          type="number"
          placeholder="例：50"
        />
      </div>
      <div class="item">
        <label>电话</label>
        <field
          v-model="phone"
          type="number"
          placeholder="请输入联系电话"
        />
      </div>
      <div class="item">
        <label>备注</label>
        <field
          v-model="remark"
          rows="2"
          autosize
          type="textarea"
          maxlength="50"
          placeholder="例：预订之后请电话确认一下"
        />
      </div>
    </div>
    <div style="display: flex;justify-content: center;font-size: 14px">
      <van-checkbox :value="xieyiChecked" @click="xieyiChecked=!xieyiChecked"></van-checkbox>
      <label style="margin-left: 10px">我已阅读并同意AA出行协议</label>
      <router-link to="/xieyi" style="color: #1989fa">《合乘协议》</router-link>
    </div>
    <div style="text-align: center;margin-bottom: 20px">
      <van-btn size="large" type="info" class="pubbtn" @click="doPub">发布出行信息</van-btn>
    </div>

    <!-- 地区选择器 -->
    <popup v-model="areaPicker" position="bottom">
      <picker
        show-toolbar
        :columns="areaList"
        @cancel="areaPicker = false"
        @confirm="onAreaConfirm"
      />
    </popup>

    <!-- 数字选择器 -->
    <popup v-model="numPicker" position="bottom">
      <picker show-toolbar :columns="numList" @cancel="numPicker = false" @confirm="onNumConfirm"/>
    </popup>

    <!-- 日期时间选择器 -->
    <popup v-model="timePicker" position="bottom">
      <datetime-picker v-model="dateTime" type="datetime" :filter="timeFilter" visible-item-count="4"
                       @confirm="onDateTimeConfirm"/>
    </popup>


  </div>
</template>
<script>
  import {
    NavBar,
    ActionSheet,
    Button,
    Picker,
    Popup,
    Field,
    DatetimePicker,
    Checkbox,
    Icon
  } from 'vant';


  export default {
    data() {
      return {
        areaPickerType: 0, // 0出发地，1目的地
        areaPicker: false,
        area_s: '郑州',
        area_e: '西平',
        areaList: ['郑州', '西平', '许昌', '漯河', '驻马店'],

        points: '',
        price: '',
        remark: '',
        phone: '17051021024',
        xieyiChecked: false,
        startTime: '',

        numPicker: false,
        numList: [1, 2, 3, 4, 5, 6],
        seatNum: 1,

        timePicker: false,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        dateTime: new Date()
      };
    },
    components: {
      NavBar,
      ActionSheet,
      'van-btn': Button,
      'van-checkbox': Checkbox,
      Picker,
      Popup,
      Field,
      DatetimePicker,
      Icon
    },
    created() {

    },
    methods: {
      switchArea() {
        const temp = this.area_s;
        this.area_s = this.area_e;
        this.area_e = temp;
      },
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
      onNumConfirm(value) {
        this.seatNum = value;
        this.numPicker = false;
      },
      timeFilter(type, value) {
        if (type === 'minute') {
          return value.filter(type => type % 30 === 0);
        }
        return value;
      },
      onDateTimeConfirm(value) {
        this.timePicker = false;
        this.dateTime = value;
        this.startTime = this.$moment(value)
          .format('MM-DD HH:mm');
      },
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
  .publish {
    height: 100%;
    overflow-y: scroll;
  }

  .form-layout {
    margin: 60px 20px 20px 20px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(158, 158, 158, 0.5);
    border-radius: 5px;
    padding: 10px;

    .item {
      margin-top: 20px;

      label {
        width: 50px;
        text-align: right;
        flex-shrink: 0;
        margin-right: 15px;
        font-weight: bold;
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
