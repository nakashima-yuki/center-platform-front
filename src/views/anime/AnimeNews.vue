<template>
    <BaseHeader />
    <div class="anime-news anime-theme">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="最新动漫新闻" name="latest">
          <news-list :news="latestNews" />
        </el-tab-pane>
        <el-tab-pane label="业界动态" name="industry">
          <news-list :news="industryNews" />
        </el-tab-pane>
        <el-tab-pane label="声优访谈" name="interview">
          <news-list :news="interviewNews" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import BaseHeader from '@/components/common/BaseHeader.vue';
  import NewsList from '@/components/NewsList.vue';  
  const activeTab = ref('latest');
  
  const latestNews = ref([
    { id: 1, title: '最新动漫新闻1', summary: '摘要1...' },
    { id: 2, title: '最新动漫新闻2', summary: '摘要2...' },
  ]);
  
  const industryNews = ref([
    { id: 3, title: '业界动态1', summary: '摘要3...' },
    { id: 4, title: '业界动态2', summary: '摘要4...' },
  ]);
  
  const interviewNews = ref([
    { id: 5, title: '声优访谈1', summary: '摘要5...' },
    { id: 6, title: '声优访谈2', summary: '摘要6...' },
  ]);
  </script>
  
  <style lang="scss" scoped>
  @import '@/styles/anime-news.scss'
  </style>