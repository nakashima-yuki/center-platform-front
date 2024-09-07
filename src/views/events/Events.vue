<template>
  <BaseHeader />
    <div class="events">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="即将举行" name="upcoming">
          <event-list :events="upcomingEvents" />
        </el-tab-pane>
        <el-tab-pane label="往期活动" name="past">
          <event-list :events="pastEvents" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import EventList from '@/components/EventList.vue';
  import BaseHeader from "@/components/common/BaseHeader.vue";
  
  const activeTab = ref('upcoming');
  
  const upcomingEvents = ref([
    { id: 1, title: '动漫展览A', date: '2023-06-01', location: '地点A' },
    { id: 2, title: '漫画交流会', date: '2023-06-15', location: '地点B' },
  ]);
  
  const pastEvents = ref([
    { id: 3, title: '声优见面会', date: '2023-05-01', location: '地点C' },
    { id: 4, title: '动画电影首映', date: '2023-05-15', location: '地点D' },
  ]);
  </script>

<style lang="scss" scoped>
@import '@/styles/events.scss';
</style>