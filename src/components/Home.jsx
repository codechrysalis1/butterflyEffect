import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/home.css';

class Home extends Component {
  render() {
    return (
      <div id="home" className="">
        <RaisedButton label="Send Package" />
        <RaisedButton label="Track Package" />
      </div>
    )
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
