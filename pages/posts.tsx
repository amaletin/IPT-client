import { values } from 'lodash';
import { NextPage } from 'next';
import { connect } from 'react-redux';
import { loadPosts } from '../actions/postsActions';
import Page from '../components/common/Page';
import PostList from '../components/posts/PostList';
import { IAppState, IPost } from '../lib/models';
import { getPosts } from '../selectors';

export interface IProps {
  posts: IPost[];
}

const Posts: NextPage<IProps> = ({ posts }) => {
  return (
    <Page title="Статьи">
      <PostList posts={posts} />
    </Page>
  );
};
// @ts-ignore
Posts.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadPosts());
  return { posts: values(getPosts(reduxStore.getState())) };
};

const mapStateToProps = (state: IAppState) => ({
  posts: values(getPosts(state)),
});

export default connect(mapStateToProps)(Posts);
