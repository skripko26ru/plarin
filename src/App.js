import React from 'react';
import { Route } from 'react-router-dom';
import Test from './pages/test/Test';

const App = () => <Route exact path="/" component={Test} />;

export default App;
