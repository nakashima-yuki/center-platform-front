<template>
  <div class="common-layout">
    <el-container direction="vertical">
        <BaseHeader/>
        <ElMain>
          <div class="home-content">
            <!-- 轮播图 -->
            <el-carousel height="300px" indicator-position="outside" class="anime-carousel">
              <el-carousel-item v-for="item in carouselItems" :key="item.id">
                <img :src="item.image" class="carousel-image" />
              </el-carousel-item>
            </el-carousel>

            <!-- 推荐列表 -->
            <div class="recommend-list anime-section">
              <h2 class="anime-title">推荐作品</h2>
              <el-row :gutter="20">
                <el-col :span="6" v-for="item in recommendItems" :key="item.id">
                  <el-card :body-style="{ padding: '0px' }" class="anime-card">
                    <img :src="item.image" class="recommend-image" />
                    <div class="anime-card-content">
                      <span class="anime-card-title">{{ item.title }}</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>

            <!-- 热搜列表 -->
            <div class="hot-search-list anime-section">
              <h2 class="anime-title">热搜榜</h2>
              <el-table :data="hotSearchItems" style="width: 100%" class="anime-table">
                <el-table-column prop="rank" label="排名" width="50"></el-table-column>
                <el-table-column prop="keyword" label="关键词"></el-table-column>
                <el-table-column prop="searches" label="搜索量"></el-table-column>
              </el-table>
            </div>

            <!-- 热门博主列表 -->
            <div class="hot-blogger-list anime-section">
              <h2 class="anime-title">人气博主</h2>
              <el-row :gutter="20">
                <el-col :span="6" v-for="blogger in hotBloggers" :key="blogger.id">
                  <el-card :body-style="{ padding: '0px' }" class="anime-card">
                    <img :src="blogger.avatar" class="blogger-avatar" />
                    <div class="anime-card-content">
                      <span class="anime-card-title">{{ blogger.name }}</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </ElMain>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ElContainer, ElMain, ElCarousel, ElCarouselItem, ElRow, ElCol, ElCard, ElTable, ElTableColumn } from 'element-plus';
import BaseHeader from '@/components/common/BaseHeader.vue';
import { ref } from 'vue';

const carouselItems = ref([
  { id: 1, image: 'https://via.placeholder.com/800x300' },
  { id: 2, image: 'https://via.placeholder.com/800x300' },
  { id: 3, image: 'https://via.placeholder.com/800x300' },
]);

const recommendItems = ref([
  { id: 1, image: 'https://via.placeholder.com/200x200', title: '推荐1' },
  { id: 2, image: 'https://via.placeholder.com/200x200', title: '推荐2' },
  { id: 3, image: 'https://via.placeholder.com/200x200', title: '推荐3' },
  { id: 4, image: 'https://via.placeholder.com/200x200', title: '推荐4' },
]);

const hotSearchItems = ref([
  { rank: 1, keyword: '热搜1', searches: '10000+' },
  { rank: 2, keyword: '热搜2', searches: '9000+' },
  { rank: 3, keyword: '热搜3', searches: '8000+' },
]);

const hotBloggers = ref([
  { id: 1, avatar: 'https://via.placeholder.com/100x100', name: '博主1' },
  { id: 2, avatar: 'https://via.placeholder.com/100x100', name: '博主2' },
  { id: 3, avatar: 'https://via.placeholder.com/100x100', name: '博主3' },
  { id: 4, avatar: 'https://via.placeholder.com/100x100', name: '博主4' },
]);
</script>

<style lang="scss" scoped>
.home-content {
  padding: 20px;
}

.carousel-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.recommend-list, .hot-search-list, .hot-blogger-list {
  margin-top: 40px;
}

.recommend-image, .blogger-avatar {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>