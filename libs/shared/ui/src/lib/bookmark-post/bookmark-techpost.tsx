import { Switch } from '../../shadnui/ui/switch';
import { Label } from '@radix-ui/react-label';
import { trpc } from '../../utils/trpc';
import { Toast, toast } from 'react-hot-toast';
import { useBookmarkStore } from '../../zustand/store';
import { useCallback } from 'react';

export interface BookMarkTechProps {
  post: {
    id: string;
  };
}

export function BookmarkTech({ post }: BookMarkTechProps) {
  const { id } = post;

  const { bookmarks, toggleBookmark } = useBookmarkStore();

  const isBookmarked = bookmarks?.includes(id);

  const handleBookmarkToggle = useCallback(() => {
    toggleBookmark(id);
  }, [id, toggleBookmark]);

  const postRoute = trpc.useContext().post;
  const bookmarkPost = trpc.post.bookmarkItem.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Added');
      postRoute.getReadingList.invalidate();
    },
  });

  const removeBookmark = trpc.post.removeBookmark.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Removed');
      postRoute.getReadingList.invalidate();
    },
  });

  const handleSwitchChange = () => {
    if (isBookmarked) {
      removeBookmark.mutate({
        itemId: id,
        itemType: 'tech',
      });
    } else {
      bookmarkPost.mutate({
        itemId: id,
        itemType: 'tech',
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
