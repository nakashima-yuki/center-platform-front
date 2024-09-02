import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// 定义用户 store
export const useUserStore = defineStore('user', () => {
  // 状态：存储用户 token
  const token = ref<string | null>(null);

  // Getter：获取用户 token
  const getToken = computed(() => token.value);

  // Action：设置用户 token
  const setToken = (newToken: string) => {
    token.value = newToken;
  };

  // Action：清除用户 token
  const clearToken = () => {
    token.value = null;
  };

  return {
    token,
    getToken,
    setToken,
    clearToken,
  };
});