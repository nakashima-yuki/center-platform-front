<template>
    <el-container direction="vertical">
        <BaseHeader />
        <ElMain>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-card class="card">
                        <img :src="userInfo.avatar" class="avatar" />
                        <h2>{{ userInfo.name }}</h2>
                        <p>{{ userInfo.bio }}</p>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="card">
                        <h3>已发布作品</h3>
                        <div>
                            <el-card shadow="hover" class="card-post" v-for="(work, index) in publishedWorks" :key="index">
                                <ul>
                                    <li>
                                        <h4>{{ work.title }}</h4>
                                        <p>{{ work.description }}</p>
                                    </li>
                                </ul>
                            </el-card>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="card">
                        <h3>已点赞的作品</h3>
                        <div>
                            <el-card shadow="hover" class="card-post" v-for="(work, index) in likedWorks" :key="index">
                                <ul>
                                    <li>
                                        <h4>{{ work.title }}</h4>
                                        <p>{{ work.description }}</p>
                                    </li>
                                </ul>
                            </el-card>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </ElMain>
    </el-container>
</template>

<script setup lang="ts">
import BaseHeader from '@/components/common/BaseHeader.vue';
import { ElMain, ElContainer, ElCard, ElRow, ElCol } from 'element-plus';
import { ref } from 'vue';

const userInfo = ref({
  name: '张三',
  bio: '这是个人简介。',
  avatar: '/src/assets/avatar.png'
});

const publishedWorks = ref([
  { title: '作品1', description: '这是作品1的描述。' },
  { title: '作品2', description: '这是作品2的描述。' },
  { title: '作品3', description: '这是作品3的描述。' },
  { title: '作品3', description: '这是作品3的描述。' },
  { title: '作品3', description: '这是作品3的描述。' },
  { title: '作品3', description: '这是作品3的描述。' },
  { title: '作品3', description: '这是作品3的描述。' }
]);

const likedWorks = ref([
  { title: '作品A', description: '这是作品A的描述。' },
  { title: '作品B', description: '这是作品B的描述。' }
]);
</script>

<style lang="scss" scoped>
.card {
  height: 375px; // 固定高度，可以根据需要调整
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-right: 10px; // 为滚动条预留空间
}

.card-post {
  margin-bottom: 10px; // 每个作品卡片之间的间距
}

h3 {
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto 20px;
}

h2 {
  text-align: center;
}
</style>