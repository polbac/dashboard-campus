import * as React from 'react';
// import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Header from 'app/components/header';

export const App = hot(module)(() => (
  <div>
    <Header />
  </div>  
));
