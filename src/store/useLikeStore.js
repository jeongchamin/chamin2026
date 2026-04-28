import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useLikeStore = create(
  persist(
    (set, get) => ({
      likes: [],  // 좋아요한 id 배열

      toggleLike: (id) => {
        const likes = get().likes
        const isLiked = likes.includes(id)
        set({
          likes: isLiked
            ? likes.filter(likedId => likedId !== id)  
            : [...likes, id]                           
        })
      },

      isLiked: (id) => get().likes.includes(id),
    }),
    { name: 'likes-storage' }
  )
)

export default useLikeStore