<template>
  <div><el-button type="info" @click="logout">退出登录</el-button></div>
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

<style></style>
