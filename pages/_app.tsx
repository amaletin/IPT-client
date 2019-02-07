import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withReduxStore from '../lib/with-redux-store';

export interface IProps {
  reduxStore: Store;
}

class MyApp extends App<IProps> {
  public render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
