import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes.js';
import Header from './components/Header.jsx';
import { useSelector } from 'react-redux';

const App = () => {
  const mode = useSelector((state) => state.preferences.mode);
  return (
    <Router>
      <div
        className={['w-screen', 'min-h-screen', mode].filter(Boolean).join(' ')}
      >
        <Header />
        <Suspense
          fallback={<div className="font-bold text-xl p-4">Loading...</div>}
        >
          <Switch>
            {routes.map((props, key) => (
              <Route key={key} {...props} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
