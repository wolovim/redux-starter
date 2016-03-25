import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    const { store, history } = this.props;
    return (
      <div>
        <Provider store={store}>
          <Router history={history} routes={routes} />
        </Provider>
      </div>
    );
  },

  propTypes: {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }
});

export default Root;
