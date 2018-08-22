import * as React from 'react';
// import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Header from 'app/components/header';
import WallComponent from 'app/containers/wall';

export const App = hot(module)(() => (
  <div>
    <Header />
    <WallComponent />
  </div>  
));
