import React from 'react';
import { connect } from 'dva';
import styles from './Homepage.css';
import Navigator from '../components/public/header/navigator.js';

const Homepage = () => {
  return (
    <div>
       <Navigator />
    </div>
  );
}

Homepage.propTypes = {
};

export default connect()(Homepage);
