import React, { Fragment } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';

export const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route path={`/detail-page/:id`} component={DetailPage} />
    </Fragment>
  </BrowserRouter>
)

export default HomePage;
