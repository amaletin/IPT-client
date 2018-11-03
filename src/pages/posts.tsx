import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IPost } from '../lib/models';
import Page from '../components/common/Page';
import { loadPosts } from '../actions/postsActions';
import { IAppState } from '../lib/models';

import PostList from '../components/posts/PostList';


export interface IProps {
  dispatch: Dispatch;
  posts: IPost[];
}

const mapStateToProps = (state: IAppState) => {
  const { posts } = state;

  return {
    posts: posts.data,
  };
};

class Posts extends React.Component<IProps, {}> {
  static async getInitialProps ({ reduxStore }) {
    const posts = await reduxStore.dispatch(loadPosts());

    return { posts }
  }

  render() {
    const { posts } = this.props;
    return (
      <Page title='Статьи'>
        <div className="blogLayout">
          <PostList posts={posts} />
        </div>
      </Page>
    );
  }
}

export default connect(mapStateToProps)(Posts);
