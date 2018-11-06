import { API_HOST } from '../../../configuration/app.config';
import { IPost } from '../../../lib/models';
import '../posts.less';
import { Fragment } from 'react';

export interface IProps {
  post: IPost;
}

const PostDetails: React.SFC<IProps> = ({ post }) => (
  <Fragment>
    <div className="posts--details-cover">
      <img src={`${API_HOST}thumbnail/1600/480/crop/best/${post.cover}`} style={{ width: '100%' }} />
      <div
        className="posts--details-cover--caption"
        dangerouslySetInnerHTML={{__html: post.cover_caption}}
      />
    </div>
    <div className="posts--container">
      <div className="posts--details-header">
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
      </div>
      <div
        className="posts--content"
        dangerouslySetInnerHTML={{__html: post.body}}
      />
    </div>
  </Fragment>
)

export default PostDetails;