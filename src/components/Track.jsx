import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './styles/track.css';

const Track = props => (
  <div id="map" >
    <TrackMap
      containerElement={<div style={{ height: '100%', width: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      mapCenter={props.mapCenter}
    />
  </div>
);

const TrackMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    center={props.mapCenter}
  />
));

const mapStateToProps = state => ({
  mapCenter: state.mapCenter,
});

const mapDispatchToProps = dispatch => ({
  setMapCenter: center => dispatch({ type: 'SET_MAP_CENTER', center }),
});

Track.propTypes = {
  mapCenter: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
