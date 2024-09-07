<template>
    <ElHeader class="custom-header">
        <div class="header-content">
            <div class="header-left" @click="home">
                <div class="logo-item">
                    <img
                        class="logo"
                        src="/src/assets/logo.svg"
                        alt="Element logo"
                    />
                </div>
            </div>
            <div class="menu-center">
                <el-menu mode="horizontal" :router="true" :default-active="activeIndex" class="el-menu-demo">
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-menu-item index="/anime-news">动漫资讯</el-menu-item>
                    <el-menu-item index="/anime-discussion">讨论区</el-menu-item>
                    <el-menu-item index="/anime-library">作品库</el-menu-item>
                    <el-menu-item index="/fan-creation">同人创作</el-menu-item>
                    <el-menu-item index="/events">活动聚会</el-menu-item>
                </el-menu>
            </div>
            <div class="search-container">
            <el-input placeholder="想要搜索的内容" class="search-input" v-model="searchQuery">
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
                >
                    <el-sub-menu index="5" class="submenu user-menu">
                        <template #title>
                            <img class="avatar" :src="userAvatar" alt="User Avatar" />
                        </template>
                        <el-menu-item v-if="isLoggedIn" index="5-1" class="submenu-item" @click="goToUser">个人中心</el-menu-item>
                        <el-menu-item v-if="isLoggedIn" index="5-2" class="submenu-item">我的收藏</el-menu-item>
                        <el-menu-item v-if="isLoggedIn" index="5-3" class="submenu-item">密码修改</el-menu-item>
                        <el-menu-item v-if="isLoggedIn" index="5-4" class="submenu-item" @click="handleLogout">退出登录</el-menu-item>
                        <el-menu-item v-else index="5-5" class="submenu-item" @click="handleLogin">登录</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="4" class="menu-item" @click="handlePublish">发布作品</el-menu-item>
                </el-menu>
            </div>
        </div>
    </ElHeader>
</template>

<script setup lang="ts">
import { ElHeader, ElInput, ElButton, ElMessage, ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
import router from '@/router';
import { login } from '@/api/api';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeIndex = ref(route.path);
const searchQuery = ref('');
const isLoggedIn = ref(false);
const userAvatar = ref('/src/assets/avatar.png');
const userStore = useUserStore();

onMounted(() => {
  activeIndex.value = route.path;
  console.log("token:", userStore.token)
  if (userStore.token && userStore.token != '') {
    isLoggedIn.value = true
  }
})

const goToUser = () => {
  router.push('/user')
}

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
  router.push('/login')
  // 这里可以添加跳转到登录页面的逻辑
};

const handleLogout = () => {
  userStore.setToken('')
  isLoggedIn.value = false;
  // 这里可以添加退出登录的逻辑
};

const home = () => {
  router.replace('/');
};
</script>

<style lang="scss" scoped>
.custom-header {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0;
  position: relative;
  height: auto;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
}

.header-left {
  flex: 0 0 auto;
  margin-right: 20px;
}

.menu-center {
  flex: 1 1 auto;
  justify-content: center;
}

.header-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.search-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.search-input {
  width: 300px;
}

.el-menu-demo {
  border-bottom: none;
}

.logo-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: auto;
}

.user-menu {
  margin-left: 16px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

// 确保菜单项不会换行
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
}

// 调整搜索框和用户菜单的响应式布局
@media (max-width: 1200px) {
  .search-input {
    width: 250px;
  }
  
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    padding: 0 8px;
  }
}

@media (max-width: 992px) {
  .menu-center {
    display: none; // 在小屏幕上隐藏中间菜单
  }
  
  .header-right {
    flex: 1 1 auto;
    justify-content: flex-end;
  }

  .search-container {
    position: static;
    transform: none;
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .search-input {
    width: 90%;
  }

  .custom-header {
    flex-direction: column;
    height: auto;
    padding-bottom: 10px;
  }

  .header-content {
    width: 100%;
  }
}
</style>