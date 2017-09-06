import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/home.css';

class Home extends Component {
  render() {
    return (
      <div id="home" className="flex restrict-width">
        <RaisedButton className="button" label="Send Package" onClick={()=> window.location="/send"} />
        <RaisedButton className="button" label="Track Package" onClick={()=> window.location="/track"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
}

const mapDispatchToProps = dispatch => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
