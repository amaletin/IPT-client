import { NextFunctionComponent } from 'next';
import { values } from 'lodash';
import { connect } from 'react-redux';
import { IAppState, IPost } from '../lib/models';
import { loadPosts } from '../actions/postsActions';
import { getPosts } from '../selectors';

import Page from '../components/common/Page';
import PostList from '../components/posts/PostList';


export interface IProps {
  posts: IPost[];
}

const Posts: NextFunctionComponent<IProps> = ({ posts }) => {
  return (
    <Page title='Статьи'>
      <PostList posts={posts} />
    </Page>
  );
}
// @ts-ignore
Posts.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadPosts());
  return { posts: values(getPosts(reduxStore.getState())) }
}

const mapStateToProps = (state: IAppState) => ({
  posts: values(getPosts(state)),
});

export default connect(mapStateToProps)(Posts);
