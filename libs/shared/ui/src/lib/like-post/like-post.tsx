/* eslint-disable-next-line */
import { BiLike } from './../../icons/BiLike';
import { BiLikeFilled } from './../../icons/BiLikeFilled';
import { FaRegCommentDots } from './../../icons/FaRegCommentDots';

export interface LikePostProps {
  showSidebar: boolean;
  id: string; // the id of the post
  countLikes: any;
  // isLiked: boolean; // whether the post is liked or not
  onLike: (id: string) => void; // the callback function to handle liking the post
  onDislike: (id: string) => void; // the callback function to handle disliking the post
  onComment: (id: string) => void;
  setShowSidebar: (value) => void; // the callback function to handle commenting on the post
}

export function LikePost(props: LikePostProps) {
  const {
    id,
    countLikes,
    onLike,
    onDislike,
    onComment,
    showSidebar,
    setShowSidebar,
  } = props;
  return (
    <div
      className={`${
        showSidebar === true ? 'hidden transition duration-300 ease-in-out' : ''
      }  fixed bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-10 overflow-auto`}
    >
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-400 bg-white p-2 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-200 transition duration-300 hover:border-black hover:shadow-black">
        {countLikes && countLikes.length > 0 ? (
          <BiLikeFilled onClick={() => onDislike(id)} />
        ) : (
          <BiLike onClick={() => onLike(id)} />
        )}
        | <FaRegCommentDots onClick={() => setShowSidebar(!showSidebar)} />
      </div>
    </div>
  );
}

export default LikePost;
