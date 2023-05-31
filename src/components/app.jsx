import React from 'react';
import { AppHeader } from './app-header/app-header';
import { ItemsList } from './items-list/items-list';

const App = () => (
  <div className="app vw-100">
    <AppHeader />
    <ItemsList />
  </div>
);

export default App;
