import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import MenubarPage from './MenubarPage';

const App = (props) => {
  return (
    <div>
      <MenubarPage/ >
      <login/ >
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
