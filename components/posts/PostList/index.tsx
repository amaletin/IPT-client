import map from 'lodash/map';
import { IPost } from '../../../lib/models';
import PostItem from '../PostItem';

interface IProps {
  posts: IPost[];
}

const PostList: React.FC<IProps> = ({ posts }) => {
  const renderedPosts = map(posts, (post) => <PostItem key={post.id} post={post} />);
  return (
    <div className="posts--container">
      {renderedPosts}
      <style jsx>{`
        .posts--container {
          max-width: 678px;
          padding: 0 15px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default PostList;
