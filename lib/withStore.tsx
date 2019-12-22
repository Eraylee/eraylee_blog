import React from 'react';
import initializeStore from '../store';
import { Store } from 'easy-peasy';

export default (App: any) => {
  return class AppWithRedux extends React.Component {
    public store: Store;
    static async getInitialProps(appContext: { ctx: { store: any } }) {
      const store = initializeStore();

      appContext.ctx.store = store;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialState: store.getState(),
      };
    }

    constructor(props: any) {
      super(props);
      this.store = initializeStore(props.initialState);
    }

    render() {
      return <App {...this.props} store={this.store} />;
    }
  };
};
