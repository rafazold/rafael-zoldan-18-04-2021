import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes.js';
import Header from './components/Header.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCity } from './redux/actions/weatherActions';

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.preferences.mode);
  const setGeoLocation = () => {
    console.log('starting');
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = (pos) => {
      const loc = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      window.localStorage.getItem('loc') !== JSON.stringify(loc) &&
        window.localStorage.setItem('loc', JSON.stringify(loc));
      dispatch(setSelectedCity('215854'));
    };
    const error = () => {
      dispatch(setSelectedCity(215854));
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };
  useEffect(() => {
    setGeoLocation();
  }, []);
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
