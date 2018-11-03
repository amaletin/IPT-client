import map from 'lodash/map';
import React from 'react';
import { IPost } from '../../../lib/models';

import PostItem from '../PostItem';

interface IProps {
  posts: IPost[];
}

const PostList: React.SFC<IProps> = ({ posts }) => {
  const renderedPosts = map(posts, post => <PostItem key={post.id} post={post} />);
  return (
    <div className="container">
      {renderedPosts}
    </div>
  );
};

export default PostList;
