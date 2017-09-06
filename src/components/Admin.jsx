import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Paper from 'material-ui/Paper';

import './styles/admin.css';

const Admin = props => (
  <div id="dashboard">
    <AdminMap
      containerElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
      mapCenter={props.mapCenter}
      mapStyle={props.mapStyle}
    />
    <Paper className="details-pane">
      {
        props.selectedDrone ?
        <div>drone data</div> :
        <div>No drone selected</div>
      }
    </Paper>
  </div>
);

const AdminMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={11}
    center={props.mapCenter}
    options={{ styles: props.mapStyle }}
  />
));

const mapStateToProps = state => ({
  mapCenter: state.mapCenter,
  mapStyle: state.mapStyle,
  selectedDrone: state.selectedDrone,
});

const mapDispatchToProps = dispatch => ({
  setMapCenter: center => dispatch({
    type: 'SET_MAP_CENTER',
    center,
  }),
});

Admin.propTypes = {
  mapCenter: PropTypes.shape().isRequired,
  mapStyle: PropTypes.shape().isRequired,
  selectedDrone: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
