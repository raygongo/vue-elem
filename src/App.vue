<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="home" :route="{name:'home',query:{id:'hahahahah'}}">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="center" :route="{name:'center'}"> 
        my-life
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        activeIndex:'home'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
</style>
