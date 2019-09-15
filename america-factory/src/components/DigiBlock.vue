<template>
    <el-container class="box">
<el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple largeFont">Time (Aval.)</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple midFont floatBox2">last week</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">year-on-year ratio <i class="el-icon-caret-top">0.00%</i></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple extraFont">{{percent}}</div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">month-on-month ratio<i class="el-icon-caret-bottom">1.80%</i></div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
    </el-container>
</template>

<script>
export default {
  name: 'DigiBlock',
  props: {
    percent: "",
  },
  data() {
    return {
        msg:"hello",
    }
  },
}
</script>

<style>
.box {
  width: 200px;
  margin: 20px;
}
 .el-col {
    border-radius: 4px;
    width: 230px;

  }
  .bg-purple-dark {
    background: #343640;
  }
  .bg-purple {
    background: #343640;
  }
  .bg-purple-light {
    background: #343640;
  }
  .grid-content {
    color: antiquewhite;
    border-radius: 4px;
    min-height: 70px;
  }
  .largeFont {
      font-size: 40px;
  }
  .extraFont {
    font-size: 55px;
    margin-bottom: 23px;
  }
  .midFont {
    font-size: 25px;
  }
  .smallFont {
    font-size: 15px;
  }
  .floatBox1 {
    text-align: left
  }
  .floatBox2 {
    text-align: right;
    margin-top: 30px;
  }
</style>

