<template>
  <div >
    <el-row class="tac" >
      <el-col :span="4"> 
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" style="height:700px;">
          <el-menu-item  index="1" :route="{name:'list'}">
            <i class="el-icon-menu" ></i>查询人员
          </el-menu-item >
          <el-menu-item index="2" :route="{name:'list'}"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3" :route="{name:'list'}"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      
      <el-col :span="20">
        <router-view></router-view>
      </el-col>  
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
