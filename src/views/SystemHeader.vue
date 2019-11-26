<template>
  <div class="system-header">
    <span class="identify">你好，管理员</span>
    <el-dropdown
      class="avatar"
      trigger="click"
      @command="handleCommand"
    >
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <i class="el-icon-arrow-down el-icon--left"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='info'>个人信息</el-dropdown-item>
        <el-dropdown-item command='changePwd'>修改密码</el-dropdown-item>
        <el-dropdown-item command='permission'>申请权限</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    handleCommand (command) {
      if (command === 'logout') {
        this.$confirm('确定是否退出登录', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message.success('已退出登录')
          this.$router.replace({ path: '/' })
        }
        )
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/system-header.less";
</style>
