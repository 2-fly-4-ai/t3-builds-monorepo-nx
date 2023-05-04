import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GlobalContextType = {
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: (newValue: boolean) => void;
};

type GlobalContextTechType = {
  isWriteTechModalOpen: boolean;
  setIsWriteTechModalOpen: (newValue: boolean) => void;
};

type GlobalContextTechModalType = {
  isTechModalOpen: boolean;
  setIsTechModalOpen: (newValue: boolean) => void;
};

export const useGlobalContextStore = create(
  persist(
    (set): GlobalContextType => ({
      isWriteModalOpen: false,
      setIsWriteModalOpen: (newValue) =>
        set(() => ({ isWriteModalOpen: newValue })),
    }),
    { name: 'global-context-store' }
  )
);

export const useGlobalContextTechStore = create(
  persist(
    (set): GlobalContextTechType => ({
      isWriteTechModalOpen: false,
      setIsWriteTechModalOpen: (newValue) =>
        set(() => ({ isWriteTechModalOpen: newValue })),
    }),
    { name: 'global-context-tech-store' }
  )
);

export const useGlobalContextTechModalStore = create(
  persist(
    (set) => ({
      posts: [],
      togglePosts: (id: string) =>
        set((state) => ({
          posts: state.posts.includes(id)
            ? state.posts.filter((postId) => postId !== id)
            : [...state.posts, id],
        })),
    }),
    { name: 'global-context-tech-modal-store' }
  )
);

export const useBookmarkStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      toggleBookmark: (id: string) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((bookmarkId) => bookmarkId !== id)
            : [...state.bookmarks, id],
        })),
    }),
    { name: 'bookmark-store' }
  )
);

export const useCommentStore = create(
  persist(
    (set) => ({
      commentLikes: {},
      toggleLikeComment: (commentId: string) =>
        set((state) => ({
          commentLikes: {
            ...state.commentLikes,
            [commentId]: !state.commentLikes[commentId],
          },
        })),
    }),
    { name: 'comment-store' }
  )
);
