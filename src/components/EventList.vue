<template>
    <div class="event-list">
      <el-card v-for="event in events" :key="event.id" class="event-item">
        <div class="event-info">
          <h3>{{ event.title }}</h3>
          <p class="event-date">日期: {{ event.date }}</p>
          <p class="event-location">地点: {{ event.location }}</p>
          <p v-if="event.description" class="event-description">{{ event.description }}</p>
        </div>
        <div class="event-actions">
          <el-button type="primary" size="small" @click="registerEvent(event.id)">报名参加</el-button>
        </div>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description?: string;
  }
  
  const props = defineProps<{
    events: Event[]
  }>();
  
  const registerEvent = (eventId: number) => {
    // 实现报名逻辑
    console.log('报名参加活动:', eventId);
  };
  </script>
  
  <style scoped>
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .event-item {
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .event-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .event-info {
    flex: 1;
  }
  
  h3 {
    margin-bottom: 8px;
    font-size: 18px;
  }
  
  .event-date, .event-location {
    color: #666;
    font-size: 14px;
    margin-bottom: 4px;
  }
  
  .event-description {
    color: #888;
    font-size: 14px;
    margin-top: 8px;
  }
  
  .event-actions {
    margin-left: 16px;
  }
  </style>