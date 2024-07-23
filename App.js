import React, { useState, useEffect } from 'react';

import SplashScreen from './splashScreenView';
import Body from './src/Components/Body'

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 0);
  });

  return (<>{isShowSplash ? ( <SplashScreen /> ) : ( <Body /> )}</>);
}