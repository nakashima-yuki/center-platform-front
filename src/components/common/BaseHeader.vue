<template>
    <ElHeader class="custom-header">
        <div class="header-left">
            <div class="logo-item">
                <img
                    class="logo"
                    src="/src/assets/logo.svg"
                    alt="Element logo"
                />
            </div>
        </div>
        <div class="menu-center">
            <el-input placeholder="想要搜索的内容" class="search-input" v-model="searchQuery"  >
              <template #append>
                <el-button :icon="Search" @click="handleSearch" />
              </template>
            </el-input>
        </div>
        <div class="header-right">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="4" class="menu-item" @click="handlePublish">发布作品</el-menu-item>
                <el-sub-menu index="5" class="submenu user-menu">
                    <template #title>
                        <img class="avatar" :src="userAvatar" alt="User Avatar" />
                    </template>
                    <el-menu-item v-if="isLoggedIn" index="5-1" class="submenu-item">个人中心</el-menu-item>
                    <el-menu-item v-if="isLoggedIn" index="5-2" class="submenu-item">我的收藏</el-menu-item>
                    <el-menu-item v-if="isLoggedIn" index="5-3" class="submenu-item">密码修改</el-menu-item>
                    <el-menu-item v-if="isLoggedIn" index="5-4" class="submenu-item" @click="handleLogout">退出登录</el-menu-item>
                    <el-menu-item v-else index="5-5" class="submenu-item" @click="handleLogin">登录</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
    </ElHeader>
</template>

<script setup lang="ts">
import { ElHeader, ElInput, ElButton } from 'element-plus';
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';

const activeIndex = ref('1');
const searchQuery = ref('');
const isLoggedIn = ref(false); // 模拟用户登录状态
const userAvatar = ref('/src/assets/avatar.png'); // 用户头像

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleSearch = () => {
  console.log('搜索内容:', searchQuery.value);
};

const handlePublish = () => {
  if (!isLoggedIn.value) {
    alert('请先登录');
    // 这里可以添加跳转到登录页面的逻辑
  } else {
    console.log('发布作品');
    // 这里可以添加发布作品的逻辑
  }
};

const handleLogin = () => {
  isLoggedIn.value = true;
  console.log('跳转到登录页面');
  // 这里可以添加跳转到登录页面的逻辑
};

const handleLogout = () => {
  console.log('退出登录');
  isLoggedIn.value = false;
  // 这里可以添加退出登录的逻辑
};
</script>

<style lang="scss" scoped>
.custom-header {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
}

.el-menu-demo {
  display: flex;
  align-items: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
}

.logo-item {
  margin-right: auto;
}

.logo {
  width: 60px;
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.1);
}

.menu-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.menu-item, .submenu-item {
  padding: 0 20px;
  color: #333;
  transition: color 0.3s, background-color 0.3s;
}

.menu-item:hover, .submenu-item:hover {
  color: #00a1d6;
  background-color: #f5f5f5;
}

.submenu > .el-sub-menu__title {
  padding: 0 20px;
  color: #333;
  transition: color 0.3s, background-color 0.3s;
}

.submenu > .el-sub-menu__title:hover {
  color: #00a1d6;
  background-color: #f5f5f5;
}

.search-input {
  width: 400px;
}

.user-menu .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>