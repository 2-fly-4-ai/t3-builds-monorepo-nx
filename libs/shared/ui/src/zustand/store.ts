import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export interface LikeStore {
  likedPosts: string[];
  addLikedPost: (postId: string) => void;
  removeLikedPost: (postId: string) => void;
}

export interface IBookmarkStore {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

interface SidebarStore {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

interface TabStore {
  value: any;
  setValue: (newValue: any) => void;
}

interface NavStore {
  showNavSidebar: boolean;
  setShowNavSidebar: (value: boolean) => void;
}

interface ListState {
  showListView: boolean;
  setListView: (value: boolean) => void;
}

type GlobalContextType = {
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: (newValue: boolean) => void;
};

type GlobalContextCourseType = {
  isWriteCourseModalOpen: boolean;
  setIsWriteCourseModalOpen: (newValue: boolean) => void;
};

type GlobalContextTechType = {
  isWriteTechModalOpen: boolean;
  setIsWriteTechModalOpen: (newValue: boolean) => void;
};

interface CommentStoreState {
  commentLikes: Record<string, boolean>;
  toggleLikeComment: (commentId: string) => void;
}

interface LikeStoreState {
  likedPosts: string[];
}

interface CommentStoreState {
  commentLikes: Record<string, boolean>;
}

interface CommentStoreActions {
  toggleLikeComment: (commentId: string) => void;
}

interface LikeStoreActions {
  addLikedPost: (postId: string) => void;
  removeLikedPost: (postId: string) => void;
}

interface BookmarkStoreState {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

interface GlobalContextStoreState {
  isWriteModalOpen: boolean;
}

interface GlobalContextStoreActions {
  setIsWriteModalOpen: (newValue: boolean) => void;
}

interface BookmarkTechStoreState {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

interface CommentStoreState {
  commentLikes: Record<string, boolean>;
  toggleLikeComment: (id: string) => void;
}

interface BookmarkState {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

interface GlobalContextTechModalStoreState {
  posts: Record<string, boolean>;
}

interface GlobalContextTechModalStoreActions {
  togglePosts: (id: string) => void;
  resetIsPostModalOpen: () => void;
}

interface BookmarkTechState {
  bookmarks: string[]
  toggleBookmark: (id: string) => void
}

export const useTabStore = create<TabStore>((set) => ({
  value: null,
  setValue: (newValue) => set({ value: newValue }),
}));

export const useNavStore = create<NavStore>((set) => ({
  showNavSidebar: false,
  setShowNavSidebar: (value) => set({ showNavSidebar: value }),
}));

export const useListStore = create<ListState>((set) => ({
  showListView: false,
  setListView: (value) => set((state) => ({ showListView: value })),
}));

export const useSidebarStore = create<SidebarStore>((set) => ({
  showSidebar: false,
  setShowSidebar: (value) => set({ showSidebar: value }),
}));

export const useGlobalContextCourseStore = create<GlobalContextCourseType>()(
  persist(
    (set) => ({
      isWriteCourseModalOpen: false,
      setIsWriteCourseModalOpen: (newValue) => {
        // Close the modal when newValue is false
        if (!newValue) {
          // Perform any necessary cleanup here
        }
        set(() => ({ isWriteCourseModalOpen: newValue }));
      },
    }),
    { name: 'global-context-course-store' }
  )
);

export const useGlobalContextTechStore = create<GlobalContextTechType>()(
  persist(
    (set) => ({
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

export const useGlobalContextTechModalStore = create<
  GlobalContextTechModalStoreState & GlobalContextTechModalStoreActions
>()(
  persist(
    (set) => ({
      posts: {},
      togglePosts: (id) =>
        set((state) => {
          const updatedPosts: Record<string, boolean> = {};
          if (state.posts[id]) {
            for (const postId in state.posts) {
              if (postId !== id) {
                updatedPosts[postId] = true;
              }
            }
          } else {
            updatedPosts[id] = true;
          }
          return { posts: updatedPosts };
        }),
      resetIsPostModalOpen: () => set({ posts: {} }),
    }),
    { name: 'global-context-tech-modal-store' }
  )
);

export const useGlobalContextStore = create<GlobalContextStoreState & GlobalContextStoreActions>()(
  persist(
    (set) => ({
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

export const useCommentStore = create<CommentStoreState & CommentStoreActions>()(
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
    { name: 'comment-store' }
  )
);

export const useLikeStore = create<LikeStoreState & LikeStoreActions>()(
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

// export const useBookmarkStore = create<BookmarkState>()(
//   persist(
//     (set) => ({
//       bookmarks: [],
//       toggleBookmark: (id: string) =>
//         set((state) => ({
//           bookmarks: state.bookmarks.includes(id)
//             ? state.bookmarks.filter((bookmarkId) => bookmarkId !== id)
//             : [...state.bookmarks, id],
//         })),
//     }),
//     { name: 'bookmark-store' }
//   )
// );

export const useBookmarkStore = create<BookmarkTechState>()(
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




//NOTE REMEMBER YOU HAVE TO USE THE CURRIED VERSION WHEN YOU USE PERSIST ()(  <- This is curry