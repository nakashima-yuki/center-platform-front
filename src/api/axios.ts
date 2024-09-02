import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: '/api', // 替换为你的后端 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如添加 token
    const userStore = useUserStore();
    const token = userStore.getToken
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    return error.response.data
  }
);

// 封装常用的 API 调用方法
export const get = (url: string, params?: any) => {
  return apiClient.get(url, { params });
};

export const post = (url: string, data?: any) => {
  return apiClient.post(url, data);
};

export const put = (url: string, data?: any) => {
  return apiClient.put(url, data);
};

export const del = (url: string) => {
  return apiClient.delete(url);
};

export default apiClient;