<template>
<div>
    <el-menu
        id="header"
        :default-active="$route.path"
        mode="horizontal"
        :router="true"
        >
        <li class="menu-header"><strong>L`XSS-FRONTEND</strong></li>
        <el-menu-item index="/">encode/decode</el-menu-item>
        <el-menu-item index="/probe">probe</el-menu-item>
        <el-menu-item index="/json">json</el-menu-item>
        <el-menu-item index="/about">about</el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
  name: 'vmenu',
  data () {
    return {
      maxTime: 0,
      oldTitle: 'l`xss'
    }
  },
  methods: {
  },
  // 初始获取最大的time，排序逻辑由后端完成
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header {
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 1;
    padding-left: 50px;
}
.el-menu-item {
    font-size: 16px;
}
.menu-header {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
}
</style>
