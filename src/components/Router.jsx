import React from 'react';
import { connect } from 'react-redux';

import Track from './Track';
import Home from './Home';
import Admin from './Admin';

import './styles/router.css';

const Router = props => (
  <div id="router" className="flex">
    {(() => {
      switch(props.selectedPage) {
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

export default connect(mapStateToProps, null)(Router);
