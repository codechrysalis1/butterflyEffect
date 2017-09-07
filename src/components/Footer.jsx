import React from 'react';
import Divider from 'material-ui/Divider';

const Footer = () => (
  <footer
    className="restrict-width"
    style={{
      height: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Divider style={{ width: '100%', marginTop: '10px' }} />
    <p style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>Code Chrysalis © 2017</p>
  </footer>
);

export default Footer;
