import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Track from './Track';
import Home from './Home';
import Admin from './Admin';

import './styles/router.css';

const Router = props => (
  <div id="router" className="flex">
    {(() => {
      switch (props.selectedPage) {
        case 'home':
          return <Home />;
        case 'track':
          return <Track />;
        case 'admin':
          return <Admin />;
        default:
          return <Home />;
      }
    })()}
  </div>
);

const mapStateToProps = state => ({
  selectedPage: state.selectedPage,
});

Router.propTypes = {
  selectedPage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Router);
