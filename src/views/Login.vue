<template>
  <div class='login-back'>
    <el-form
      class="login-form"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
      label-position="left"
    >
      <div class="login-title">欢迎使用家庭信息簿</div>
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input
          placeholder='请输入用户名'
          v-model="ruleForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          placeholder='请输入密码'
          v-model="ruleForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="loginClick('ruleForm')"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 8) {
        callback(new Error('密码必须大于8位'))
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    loginClick (formName) {
      this.$refs[formName].validate((valide) => {
        if (valide) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        } else {
          this.$alert('登录错误')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/login.less";
</style>
