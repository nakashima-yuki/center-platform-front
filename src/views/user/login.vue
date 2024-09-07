<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <img src="/src/assets/logo.svg" alt="Bilibili Logo" class="logo animated" />
          <h2 class="title">欢迎回来!</h2>
        </div>
        <el-form :model="loginForm" class="login-form">
        <el-form-item prop="email">
          <el-input v-model="loginForm.email" placeholder="请输入邮箱">
            <template #prefix>
              <i class="el-icon-message"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码">
            <template #prefix>
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin" class="login-button">
          登录
          <i class="el-icon-right"></i>
        </el-button>
      </el-form>
      <div class="login-footer">
        <span>还没有账号？<a @click="goToRegister" class="register-link">立即注册</a></span>
      </div>
    </div>
    <div class="anime-character"></div>
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
    background-color: #fce4ec;
    background-image: url('/src/assets/anime-bg.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .login-box {
    width: 400px;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  
  .login-header {
    margin-bottom: 30px;
  }
  
  .logo {
    width: 120px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.1);
  }
  
  .title {
    font-size: 28px;
    color: #ff69b4;
    margin-bottom: 20px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    text-align: left;
  }
  
  .el-input {
    margin-bottom: 15px;
  }
  
  .login-button {
    width: 100%;
    margin-top: 20px;
    background-color: #ff69b4;
    border-color: #ff69b4;
    font-size: 18px;
    padding: 12px;
    transition: all 0.3s ease;
  }
  
  .login-button:hover {
    background-color: #ff1493;
    border-color: #ff1493;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .login-footer {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .register-link {
    color: #ff69b4;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .register-link:hover {
    color: #ff1493;
  }
  
  .anime-character {
    position: absolute;
    right: -100px;
    bottom: -50px;
    width: 300px;
    height: 300px;
    background-image: url('/src/assets/anime-character.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.7;
    transition: all 0.5s ease;
  }
  
  .login-box:hover .anime-character {
    right: -50px;
    opacity: 1;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animated {
    animation: float 3s ease-in-out infinite;
  }
</style>