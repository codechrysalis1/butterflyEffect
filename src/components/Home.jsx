import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/home.css';

const Home = () => (
  <div id="home" className="flex restrict-width">
    <RaisedButton className="button" label="Send Package" onClick={() => { window.location = '/send'; }} />
    <RaisedButton className="button" label="Track Package" onClick={() => { window.location = '/track'; }} />
  </div>
);

export default Home;
