import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import withReduxStore from '../lib/with-redux-store';
import { persistor, updateTimerAction } from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    /* eslint-disable no-undef */
    const store = this.props.reduxStore;
    if (localStorage.getItem('persist:root')) {
      const { started } = JSON.parse(localStorage.getItem('persist:root'));
      if (started === 'true') {
        setInterval(() => store.dispatch(updateTimerAction()), 1000);
      }
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <PersistGate loading={null} persistor={persistor(reduxStore)}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
