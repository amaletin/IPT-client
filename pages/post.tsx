import React from 'react';
import { connect } from 'react-redux';
import { IAppState, IPost } from '../lib/models';
import { loadPost } from '../actions/postsActions';
import Page from '../components/common/Page';
import PostDetails from '../components/posts/PostDetails';

export interface IProps {
  post: IPost;
}

const mapStateToProps = (state: IAppState) => {
  const { posts } = state;

  return {
    post: posts.current,
  };
};

class Post extends React.Component<IProps> {
  static getInitialProps = async function ({ reduxStore, query }) {
    const { id } = query;
    const post = await reduxStore.dispatch(loadPost(id));

    return { post }
  }

  render() {
    const { post } = this.props;
    return (  
      <Page header={false}>
        <PostDetails post={post} />
      </Page>
    )
  }
}

export default connect(mapStateToProps)(Post);