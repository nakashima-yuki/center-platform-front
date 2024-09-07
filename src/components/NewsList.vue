<template>
    <div class="news-list">
      <el-card v-for="item in news" :key="item.id" class="news-item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface NewsItem {
    id: number;
    title: string;
    summary: string;
  }
  
  const props = defineProps<{
    news: NewsItem[]
  }>();
  </script>
  
  <style scoped>
  .news-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .news-item {
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .news-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }
  
  p {
    color: #666;
    font-size: 14px;
  }
  </style>