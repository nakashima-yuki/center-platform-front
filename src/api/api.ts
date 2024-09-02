import { get, post } from './axios';

// 用户登录请求
export const login = (username: string, password: string) => {
  return post('/user/login', { "email":username, "password":password });
};

// 用户注册请求
export const register = (username: string, password: string, email: string) => {
  return post('/user/register', { username, password, email });
};

// 获取用户信息请求
export const getUserInfo = (userId: string) => {
  return get(`/user/${userId}`);
};