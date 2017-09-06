import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/send.css';

const Track = props => (
  <div id="sending-page" className="flex restrict-width">
    <div id="sending-search-pane" className="flex">
      <Paper className="sending-address-pane flex" zDepth={1}>
        <p>From:</p>
        <TextField
          className="sending-address-box"
          hintText="Send From"
        />
      </Paper>
      <Paper className="sending-address-pane flex" zDepth={1}>
        <p>To:</p>
        <TextField
          className="sending-address-box"
          hintText="Send To"
        />
      </Paper>
      <RaisedButton
        primary
        label="Send"
        className="sending-search-button"
      />
    </div>

    <div id="track-map">
      <SendMap
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        mapCenter={props.mapCenter}
        mapStyle={props.mapStyle}
      />
    </div>
  </div>
);

const SendMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={11}
    center={props.mapCenter}
    options={{ styles: props.mapStyle }}
  />
));

const mapStateToProps = state => ({
  mapCenter: state.mapCenter,
  mapStyle: state.mapStyle,
});

const mapDispatchToProps = dispatch => ({
  setMapCenter: center => dispatch({ type: 'SET_MAP_CENTER', center }),
});

Track.propTypes = {
  mapCenter: PropTypes.shape().isRequired,
  mapStyle: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
