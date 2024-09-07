<template>
<BaseHeader />
  <div class="anime-library">
    <el-form :inline="true" class="filter-form">
      <el-form-item label="类型">
        <el-select v-model="filterType">
          <el-option label="全部" value="" />
          <el-option label="动作" value="action" />
          <el-option label="冒险" value="adventure" />
          <!-- 添加更多类型选项 -->
        </el-select>
      </el-form-item>
      <el-form-item label="年代">
        <el-select v-model="filterYear">
          <el-option label="全部" value="" />
          <el-option label="2023" value="2023" />
          <el-option label="2022" value="2022" />
          <!-- 添加更多年份选项 -->
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="applyFilter">筛选</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="20">
      <el-col :span="6" v-for="anime in animeList" :key="anime.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="anime.cover" class="anime-cover" />
          <div class="anime-info">
            <h3>{{ anime.title }}</h3>
            <p>{{ anime.description }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseHeader from "@/components/common/BaseHeader.vue";

const filterType = ref('');
const filterYear = ref('');
const animeList = ref([
  { id: 1, title: '动漫1', cover: 'https://via.placeholder.com/150', description: '描述1...' },
  { id: 2, title: '动漫2', cover: 'https://via.placeholder.com/150', description: '描述2...' },
]);

const applyFilter = () => {
  // 实现筛选逻辑
  console.log('应用筛选', filterType.value, filterYear.value);
};
</script>

<style lang="scss" scoped>
@import '@/styles/anime-library.scss';
</style>
