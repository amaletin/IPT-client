import { IPost } from '../../../lib/models';

interface IProps {
  post: IPost;
}

const PostItem: React.SFC<IProps> = ({ post }) => {
  return (
    <div className="post-item--card">
      <h2>{post.title}</h2>
      <h5>{post.subtitle}</h5>
    </div>
  );
};

export default PostItem;
