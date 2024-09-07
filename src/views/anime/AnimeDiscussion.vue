<template>
  <BaseHeader />
    <div class="anime-discussion">
      <el-input v-model="searchQuery" placeholder="搜索讨论主题" />
      <el-button @click="createNewTopic">创建新主题</el-button>
      <el-table :data="discussionTopics">
        <el-table-column prop="title" label="主题" />
        <el-table-column prop="author" label="作者" />
        <el-table-column prop="replies" label="回复数" />
        <el-table-column prop="lastReply" label="最后回复时间" />
      </el-table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import BaseHeader from '@/components/common/BaseHeader.vue';
  const searchQuery = ref('');
  const discussionTopics = ref([
    { id: 1, title: '讨论主题1', author: '用户A', replies: 10, lastReply: '2023-05-01' },
    { id: 2, title: '讨论主题2', author: '用户B', replies: 5, lastReply: '2023-05-02' },
  ]);
  
  const createNewTopic = () => {
    // 实现创建新主题的逻辑
    console.log('创建新主题');
  };
  </script>

  <style lang="scss" scoped>
  @import '@/styles/anime-discussion.scss';
  </style>