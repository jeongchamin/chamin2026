import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  persist(
    (set) => ({
      // 상태(State)
      isDarkMode: false,

      // 액션(Actions)
      //toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      toggleDarkMode: () => set((state) => {
        console.log('이전 상태:', state.isDarkMode); // 이게 찍히는지 확인
        return { isDarkMode: !state.isDarkMode };
      }),

    }),
    { name: 'user-settings' }
  )
);

export default useSettingsStore;