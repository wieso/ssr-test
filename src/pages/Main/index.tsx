import React, { useEffect, useState } from 'react';
import imgPath from 'assets/images/chromeStep1.png';
import Svg from 'assets/icons/agent.svg';
import styles from './index.less';
import { useDispatch, useSelector } from 'react-redux';
import { TestSSRState } from 'store/reducer';
import { add } from 'store/entity';

function Main() {
  const dispatch = useDispatch();
  const value = useSelector<TestSSRState, number>(state => state.entity);
  return (
    <div className={styles.test}>
      123 react react test
      <img src={imgPath} />
      <Svg />
      <div>{value}</div>
      <button onClick={() => dispatch(add())}>Add</button>
    </div>
  );
}

export default Main;
