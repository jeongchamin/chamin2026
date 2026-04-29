import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from 'react-hot-toast'

const useAuthStore = create(
  persist(
    (set) => ({
      isPartner: false,
      setPartner: () => {
        set({ isPartner: true });
        toast('상세 경력이 공개되었습니다.');
      },
      setGuest: () => {
        set({ isPartner: false });
        toast('게스트 모드로 전환되었습니다.');
      },
      toggleRole: () => set((state) => {
        const next = !state.isPartner;
        toast(next ? '상세 경력이 공개되었습니다.' : '게스트 모드로 전환되었습니다.');
        return { isPartner: next };
      }),
    }),
    { name: "auth-storage" }
  )
);

export default useAuthStore;