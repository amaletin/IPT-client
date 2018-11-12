import { API_HOST } from '../../../configuration/app.config';
import { IPost } from '../../../lib/models';
import { Fragment } from 'react';
import { colors, fonts } from '../../../lib/styleguide';

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
    <style jsx>{`
      .posts--container {
        max-width: 678px;
        padding: 0 15px;
        margin: 0 auto;
      }
      
      .posts--details-cover {
        position: relative;
      }
      
      .posts--details-cover--caption {
        position: absolute;
        bottom: 15px;
        right: 15px;
        opacity: 0.4;
      }

      .posts--details-cover--caption:hover {
        opacity: 1;
      }

      .posts--details-header {
        font-family: ${ fonts.fontCirce };
        text-transform: uppercase;
      }

      .posts--details-header h1 {
        color: ${ colors.pink };
        font-weight: bold;
        margin-bottom: 0;
      }

      .posts--details-header h2 {
        color: ${ colors.textGreyLight };
        margin-top: 0;
      }
    `}</style>
  </Fragment>
)

export default PostDetails;