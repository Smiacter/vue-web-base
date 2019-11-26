<template>
  <div class="home-back">
    <div class="menu">
      <el-col>
        <el-menu
          class="el-menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="#303133"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="this.$route.path"
          router
        >
          <el-menu-item
            v-for="(item,i) in navList"
            :key="i"
            :index="item.path"
          >
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.title}}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="container">
      <system-header></system-header>
      <keep-alive>
        <router-view class="content" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import SystemHeader from '@/views/SystemHeader'
export default {
  name: 'home',
  components: {
    SystemHeader
  },
  data () {
    return {
      navList: [
        { path: '/home/familyInfo', title: '家庭信息' },
        { path: '/home/event', title: '事件管理' },
        { path: '/home/notification', title: '通知管理' },
        { path: '/home/setting', title: '设置' }
      ]
    }
  },
  methods: {
    btnClick () {
      this.$message('这是一条消息提示')
    },
    dangerClick () {
      this.$alert('这是一条弹框消息', '弹框标题')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/home.less";
</style>
