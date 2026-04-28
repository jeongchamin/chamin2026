import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // 1. 미들웨어 불러오기

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      userName: '',
      login: (name) => set({ isLoggedIn: true, userName: name }),
      logout: () => set({ isLoggedIn: false, userName: '' }),
    }),
    {
      name: 'auth-storage', // 2. 로컬스토리지에 저장될 키 이름 (중요!)
    }
  )
);

export default useAuthStore;