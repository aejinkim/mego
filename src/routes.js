import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MegoPage from './components/MegoPage';
import MainPage from './containers/MainPage';
import LoginPage from './components/LoginPage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MegoPage}/>
    <Route path="Main" component={MainPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
