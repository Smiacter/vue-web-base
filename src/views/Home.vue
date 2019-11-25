<template>
  <div class="home">
    HelloWorld
    <div>
      <el-button type='primary' @click="btnClick">主要按钮</el-button>
      <el-button type='danger' @click="dangerClick">危险按钮</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    btnClick () {
      this.$message('这是一条消息提示')
    },
    dangerClick () {
      this.$alert('这是一条弹框消息', '弹框标题')
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/home.less";
</style>
