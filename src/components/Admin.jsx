import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import './styles/admin.css';

const AdminMap = withGoogleMap(props => {
  return (
    <GoogleMap 
      defaultZoom={10}
      center={ props.mapCenter }
    />
  );
});

class Admin extends Component {
  render() {
    return (
      <div id="dashboard">
        <AdminMap
          containerElement={ <div style={{ height: `100%` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          mapCenter={ this.props.mapCenter }
        />
        <Paper className="admin-search-pane" zDepth={2} >
          <TextField
            hintText="Search location..."
          />
          {(() => {
            if (this.props.selectedDrone) {
              return (
                <div>
                </div>
              );
            }
          })()}
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mapCenter: state.mapCenter,
    selectedDrone: state.selectedDrone,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMapCenter: center => {
      dispatch({ type: 'SET_MAP_CENTER', center });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
