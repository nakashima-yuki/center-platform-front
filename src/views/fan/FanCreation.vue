<template>
  <BaseHeader />
    <div class="fan-creation">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="同人文章" name="fanfic">
          <fan-content-list :content="fanfics" />
        </el-tab-pane>
        <el-tab-pane label="同人画作" name="fanart">
          <fan-content-list :content="fanarts" />
        </el-tab-pane>
        <el-tab-pane label="Cosplay" name="cosplay">
          <fan-content-list :content="cosplays" />
        </el-tab-pane>
      </el-tabs>
      <el-button @click="uploadContent">上传作品</el-button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import FanContentList from '../../components/FanContentList.vue';
  import BaseHeader from '@/components/common/BaseHeader.vue';
  const activeTab = ref('fanfic');
  
  const fanfics = ref([
    { id: 1, title: '同人文章1', author: '作者A' },
    { id: 2, title: '同人文章2', author: '作者B' },
  ]);
  
  const fanarts = ref([
    { id: 3, title: '同人画作1', author: '画师C' },
    { id: 4, title: '同人画作2', author: '画师D' },
  ]);
  
  const cosplays = ref([
    { id: 5, title: 'Cosplay1', author: 'Coser E' },
    { id: 6, title: 'Cosplay2', author: 'Coser F' },
  ]);
  
  const uploadContent = () => {
    // 实现上传作品的逻辑
    console.log('上传作品');
  };
  </script>

<style lang="scss" scoped>
@import '@/styles/fan-creation.scss';
</style>