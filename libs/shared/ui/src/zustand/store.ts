import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useBookmarkStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((bookmarkId) => bookmarkId !== id)
            : [...state.bookmarks, id],
        })),
    }),
    { name: 'bookmark-store' } // name the store for local storage
  )
);

export const useCommentStore = create(
  persist(
    (set) => ({
      commentLikes: {},
      toggleLikeComment: (commentId) =>
        set((state) => ({
          commentLikes: {
            ...state.commentLikes,
            [commentId]: !state.commentLikes[commentId],
          },
        })),
    }),
    { name: 'comment-store' } // name the store for local storage
  )
);
