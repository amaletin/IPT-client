import Link from 'next/link';
import { IPost } from '../../../lib/models';
import {API_HOST} from '../../../configuration/app.config';
import '../posts.less';

interface IProps {
  post: IPost;
}

const PostItem: React.SFC<IProps> = ({ post }) => {
  return (
    <div className="post-item--card">
      <Link as={`post/${post.id}`} href={`/post?id=${post.id}`}>
        <img src={`${API_HOST}thumbnail/700/210/crop/best/${post.cover}`} />
      </Link>
      <Link as={`post/${post.id}`} href={`/post?id=${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <Link as={`post/${post.id}`} href={`/post?id=${post.id}`}>
        <h5>{post.subtitle}</h5>
      </Link>
      <Link as={`post/${post.id}`} href={`/post?id=${post.id}`}>
        <div
          className="post-item--excerpt"
          dangerouslySetInnerHTML={{__html: post.excerpt}}
        />
      </Link>
    </div>
  );
};

export default PostItem;
