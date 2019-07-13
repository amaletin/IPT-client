import { isEmpty } from 'lodash';
import { NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../actions/postsActions';
import Page from '../components/common/Page';
import PostDetails from '../components/posts/PostDetails';
import { IAppState, IPost } from '../lib/models';
import { getPostById } from '../selectors';

export interface IProps {
  id: string | string[];
  post: IPost;
}

const Post: NextPage<IProps> = ({ post }) => (
  <Page header={false}>
    {!isEmpty(post) && <PostDetails post={post} />}
  </Page>
);
// @ts-ignore
Post.getInitialProps = async ({ reduxStore, query }) => {
  const { id } = query;
  await reduxStore.dispatch(loadPost(parseInt(id as string, 10)));
  return {
    id,
    post: getPostById(reduxStore.getState(), { id }),
  };
};
const mapStateToProps = (state: IAppState, ownProps: IProps) => ({
  post: getPostById(state, { id: ownProps.id }),
});
export default connect(mapStateToProps)(Post);
