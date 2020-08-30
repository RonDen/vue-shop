<template>
  <!-- 主体布局容器 -->
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img id="logo" src="../assets/logo2.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左侧边控制栏 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 右侧内容主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  width: 100%;
}

.el-header {
  background-color: #373d41;
  display: flex;
  padding-left: 0;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      padding: 0;
      width: 200px;
    }
    > img {
      height: 60px;
      width: 60px;
      padding: 5%;
    }
  }
}

// #logo {
// }

.el-aside {
  background-color: #333744;
}

.el-main {
  background-color: #eaedf1;
}
</style>
