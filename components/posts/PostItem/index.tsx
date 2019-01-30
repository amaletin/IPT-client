import Link from 'next/link';
import { IPost } from '../../../lib/models';
import {API_HOST} from '../../../configuration/app.config';
import { shadows, fonts } from '../../../lib/styleguide';

interface IProps {
  post: IPost;
}

const PostItem: React.FC<IProps> = ({ post }) => {
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
      <style jsx>{`
        .post-item--card {
          border-width: 1px;
          border-radius: 5px;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.1);
          box-shadow: ${ shadows.boxShadowLite };
          margin-bottom: 30px;
          padding: 15px;
        }

        .post-item--card img {
          cursor: pointer;
          max-width: 100%;
          height: auto;
        }

        .post-item--card h2 {
          cursor: pointer;
          font-size: 30px;
          margin-bottom: 0;
          text-transform: uppercase;
          font-family: ${ fonts.fontCirce };
          font-weight: 200;
        }

        .post-item--card h5 {
          cursor: pointer;
          color: #9c9c9c;
          font-size: 18px;
          margin-top: 0;
          text-transform: uppercase;
          font-family: ${ fonts.fontCirce };
          line-height: 1;
        }

        .post-item--card--excerpt {
          cursor: pointer;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default PostItem;
