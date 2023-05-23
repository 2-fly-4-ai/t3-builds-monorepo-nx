import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface LikeStore {
  likedPosts: string[];
  addLikedPost: (postId: string) => void;
  removeLikedPost: (postId: string) => void;
}

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

type TabStore = {
  commentsTabRef: null | HTMLElement;
  setCommentsTabRef: (ref: null | HTMLElement) => void;
  handleButtonClick: () => void;
};

export interface CommentStoreState {
  commentLikes: Record<string, boolean>;
  toggleLikeComment: (commentId: string) => void;
}

export const useGlobalContextStore = create(
  persist(
    (set): GlobalContextType => ({
      isWriteModalOpen: false,
      setIsWriteModalOpen: (newValue) => {
        // Close the modal when newValue is false
        if (!newValue) {
          // Perform any necessary cleanup here
        }
        set(() => ({ isWriteModalOpen: newValue }));
      },
    }),
    { name: 'global-context-store' }
  )
);

export const useGlobalContextTechStore = create(
  persist(
    (set): GlobalContextTechType => ({
      isWriteTechModalOpen: false,
      setIsWriteTechModalOpen: (newValue) => {
        // Close the modal when newValue is false
        if (!newValue) {
          // Perform any necessary cleanup here
        }
        set(() => ({ isWriteTechModalOpen: newValue }));
      },
    }),
    { name: 'global-context-tech-store' }
  )
);
export const useGlobalContextTechModalStore = create(
  persist(
    (set) => ({
      posts: {},
      togglePosts: (id: string) =>
        set((state) => {
          const updatedPosts = {};

          // Check if the clicked ID is already active
          if (state.posts[id]) {
            // If active, remove it from the state to close the modal
            for (const postId in state.posts) {
              if (postId !== id) {
                updatedPosts[postId] = true;
              }
            }
          } else {
            // If not active, add the clicked ID to the state
            updatedPosts[id] = true;
          }

          return { posts: updatedPosts };
        }),
      resetIsPostModalOpen: () => set({ posts: {} }),
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

export const useBookmarkTechStore = create(
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
    { name: 'bookmark-tech-store' }
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

export const useLikeStore = create<LikeStore>(
  persist(
    (set) => ({
      likedPosts: [],
      addLikedPost: (postId) =>
        set((state) => ({ likedPosts: [...state.likedPosts, postId] })),
      removeLikedPost: (postId) =>
        set((state) => ({
          likedPosts: state.likedPosts.filter((id) => id !== postId),
        })),
    }),
    {
      name: 'like-store',
      getStorage: () => localStorage,
    }
  )
);

export const useTabStore = create((set) => ({
  value: null,
  setValue: (newValue) => set({ value: newValue }),
}));

export const useNavStore = create((set) => ({
  showNavSidebar: false,
  setShowNavSidebar: (value) => set({ showNavSidebar: value }),
}));
