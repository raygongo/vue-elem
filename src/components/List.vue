<template>
  <div style="padding:20px;">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:20px;">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-for-item>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
        </el-date-picker>
      </el-for-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
            <el-button @click="handleClick" type="success" size="small">查看</el-button>
            <el-button type="warning" size="small">编辑</el-button>
</template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin-top:25px;">
    <el-pagination
      style="float:right;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        formInline: {
          user: '',
          region: ''
        },
        value1: '',
        currentPage:1,
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        tableData: [{
          date: '2016-05-02',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-01',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '周杰倫',
          address: '上海市普陀区金沙江路 1519 弄'
        }
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick() {
        console.log(1);
      },
      
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
  }
</script>

<style scoped>
  
</style>
