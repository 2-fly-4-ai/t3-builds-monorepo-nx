import { Switch } from '../../shadnui/ui/switch';
import { Label } from '@radix-ui/react-label';
import { trpc } from '../../utils/trpc';
import { Toast, toast } from 'react-hot-toast';
import { useBookmarkTechStore } from '../../zustand/store';
import { useCallback } from 'react';

export interface BookMarkTechProps {
  post: {
    id: string;
  };
}

export function BookmarkTech({ post }: BookMarkTechProps) {
  const { id } = post;

  const { bookmarks, toggleBookmark } = useBookmarkTechStore();

  const isBookmarked = bookmarks?.includes(id);

  const handleBookmarkToggle = useCallback(() => {
    toggleBookmark(id);
  }, [id, toggleBookmark]);

  const postRoute = trpc.useContext().post;
  const bookmarkPost = trpc.post.bookmarkTech.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Added');
      postRoute.getTechReadingList.invalidate();
    },
  });

  const removeBookmark = trpc.post.removeBookmarkTech.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Removed');
      postRoute.getTechReadingList.invalidate();
    },
  });

  const handleSwitchChange = () => {
    if (isBookmarked) {
      removeBookmark.mutate({
        techId: id,
      });
    } else {
      bookmarkPost.mutate({
        techId: id,
      });
    }
    handleBookmarkToggle();
  };

  return (
    <div>
      <div className="flex items-center gap-2 space-x-2 font-mono text-xl">
        <Switch
          id="airplane-mode"
          checked={isBookmarked}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="airplane-mode">Add to Stack</Label>
      </div>
    </div>
  );
}

export default BookmarkTech;
