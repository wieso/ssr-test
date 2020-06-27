import React from 'react';
import imgPath from '../assets/images/chromeStep1.png';
import Svg from '../assets/icons/agent.svg';

const styles = require('./index.less');

function Main() {
  return (
    <div className={styles.test}>
      123 react react
      <img src={imgPath} />
      <Svg />
    </div>
  );
}

export default Main;
