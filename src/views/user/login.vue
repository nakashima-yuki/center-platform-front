<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <img src="/src/assets/logo.svg" alt="Bilibili Logo" class="logo" />
          <h2>登录</h2>
        </div>
        <el-form :model="loginForm" class="login-form">
        <el-form-item prop="email">
          <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin" class="login-button">登录</el-button>
      </el-form>
        <div class="login-footer">
          <span>还没有账号？<a @click="goToRegister">立即注册</a></span>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
  import { login } from '@/api/api'; // 假设你有一个登录 API
  import { useUserStore } from '@/stores/user';
  import { reactive } from 'vue'

  const router = useRouter();
  const loginForm = reactive({
    email: '',
    password: ''
  });
  
  const handleLogin = () => {
    login(loginForm.email, loginForm.password).then(response => {
      if (response.code == 200) {
        const userStore = useUserStore()
        userStore.setToken(response.data)
        router.push('/'); // 登录成功后跳转到主页
      } else {
        ElMessage({
            type:"error",
            message:"登录失败，请检查您的邮箱和密码"
        })
      }
    });
  };
  
  const goToRegister = () => {
    router.push('/register'); // 跳转到注册页面
  };
</script>
  
<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-box {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
  }
  
  .login-header {
    margin-bottom: 20px;
  }
  
  .logo {
    width: 100px;
    margin-bottom: 10px;
  }
  
  .login-form {
    text-align: left;
  }
  
  .login-button {
    width: 100%;
    margin-top: 20px;
  }
  
  .login-footer {
    margin-top: 20px;
  }
</style>