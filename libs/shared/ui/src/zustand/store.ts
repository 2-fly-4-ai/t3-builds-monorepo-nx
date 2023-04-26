import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type GlobalContextType = {
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: (newValue: boolean) => void;
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
