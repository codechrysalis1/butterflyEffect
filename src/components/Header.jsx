import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import './styles/header.css';

const Header = props => (
  <header className="restrict-width">
    <FlatButton label="About" />
    <FlatButton label="Send Package" />
    <FlatButton label="Track Package" />
  </header>
);

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

Header.propTypes = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
