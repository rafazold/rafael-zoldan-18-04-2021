import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';

import routes from './routes.js';

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <Router>
      <div
        className={['w-screen', 'min-h-screen', dark && 'dark']
          .filter(Boolean)
          .join(' ')}
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
