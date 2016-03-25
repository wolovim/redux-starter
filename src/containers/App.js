import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';
import { Link } from 'react-router';

import '../assets/stylesheets/base.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        Welcome!
        {' '}
        <Link to='/list'>List Maker</Link>
        {' '}
        <Link to='/about'>About</Link>

        <br /><br />

        {this.props.children}
      </div>
    );
  },

  propTypes: {
    children: PropTypes.object.isRequired
  }
});

function select(state) {
  return state;
}

export default connect(select, { pushState })(App);
