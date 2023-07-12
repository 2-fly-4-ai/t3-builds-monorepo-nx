import { Switch } from '../../shadnui/ui/switch';
import { Label } from '@radix-ui/react-label';
import { trpc } from '../../utils/trpc';
import { Toast, toast } from 'react-hot-toast';
import { useBookmarkStore } from '../../zustand/store';
import { useCallback } from 'react';
import Router from 'next/router';

export interface BookMarkTechProps {
  post: {
    id: string;
  };
}

export function Bookmarkpost({ post }: BookMarkTechProps) {
  const { id } = post;
  const pathName = Router.pathname.slice(1, -1);
  console.warn(pathName);

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
        itemType: pathName,
      });
    } else {
      bookmarkPost.mutate({
        itemId: id,
        itemType: pathName,
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
        <Label htmlFor="airplane-mode">BookMark Post</Label>
      </div>
    </div>
  );
}

export default Bookmarkpost;
