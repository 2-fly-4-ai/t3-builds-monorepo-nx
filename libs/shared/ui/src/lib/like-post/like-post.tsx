/* eslint-disable-next-line */
import { BiLike } from './../../icons/BiLike';
import { BiLikeFilled } from './../../icons/BiLikeFilled';
import { FaRegCommentDots } from './../../icons/FaRegCommentDots';

export interface LikePostProps {
  id: string; // the id of the post
  countLikes: any;
  // isLiked: boolean; // whether the post is liked or not
  onLike: (id: string) => void; // the callback function to handle liking the post
  onDislike: (id: string) => void; // the callback function to handle disliking the post
  onComment: (id: string) => void; // the callback function to handle commenting on the post
}

export function LikePost(props: LikePostProps) {
  const { id, countLikes, onLike, onDislike, onComment } = props;
  return (
    <div className="fixed bottom-10 flex w-full justify-center ">
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-400 bg-white p-2 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-200 transition duration-300 hover:border-black hover:shadow-black">
        {countLikes && countLikes.length > 0 ? (
          <BiLikeFilled onClick={() => onDislike(id)} />
        ) : (
          <BiLike onClick={() => onLike(id)} />
        )}
        | <FaRegCommentDots onClick={() => onComment(id)} />
      </div>
    </div>
  );
}

export default LikePost;
