import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/SvgIcon';
import TextField from 'material-ui/TextField';

import './styles/track.css';

const svgString = 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z';

const Track = props => (
  <div id="tracking-page" className="flex restrict-width">
    <Paper className="tracking-number-pane flex" zDepth={1}>
      <Icon className="magnify-icon">
        <path d={svgString} />
        <path d="M0 0h24v24H0z" fill="none" />
      </Icon>
      <TextField
        className="tracking-number-box"
        hintText="Tracking Number"
      />
    </Paper>

    <div id="track-map">
      <TrackMap
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        mapCenter={props.mapCenter}
      />
    </div>
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
