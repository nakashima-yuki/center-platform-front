<template>
    <div class="fan-content-list">
      <el-card v-for="item in content" :key="item.id" class="content-item">
        <div class="content-info">
          <h3>{{ item.title }}</h3>
          <p class="author">作者: {{ item.author }}</p>
          <p v-if="item.description" class="description">{{ item.description }}</p>
        </div>
        <el-image 
          v-if="item.image" 
          :src="item.image" 
          fit="cover" 
          class="content-image"
        />
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface FanContent {
    id: number;
    title: string;
    author: string;
    description?: string;
    image?: string;
  }
  
  const props = defineProps<{
    content: FanContent[]
  }>();
  </script>
  
  <style scoped>
  .fan-content-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .content-item {
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .content-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .content-info {
    flex: 1;
  }
  
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }
  
  .author {
    color: #666;
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .description {
    color: #888;
    font-size: 14px;
  }
  
  .content-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-left: 16px;
  }
  </style>