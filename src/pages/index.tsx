import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from 'pages/Main';
import MapPage from 'pages/Map';
import { useTheme } from 'components/Theme';

function Pages() {
  const { theme, toggleTheme, styles } = useTheme();
  return (
    <div style={{ backgroundColor: styles.backgroundColor }}>
      <Switch>
        <Route path="/map/:id?" component={MapPage}/>
        <Route path="/" component={Main}/>
      </Switch>
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
}

export default Pages;
