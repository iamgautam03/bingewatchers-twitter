import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './componenets/Landing';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Grid from './componenets/Grid';
import TrendingTweets from './componenets/TrendingTweets';
import Logout from './componenets/Logout';
import auth from './apis/auth';
import Dashboard from './componenets/Dashboard';

const navLinks = [
  {
    name: 'Home',
    link: '/',
    beforeLogin: true,
    afterLogin: true,
  },
  {
    name: 'Trending',
    link: '/trending',
    beforeLogin: true,
    afterLogin: true,
  },
  {
    name: 'Login / Register',
    link: '/auth',
    beforeLogin: true,
    afterLogin: false,
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    beforeLogin: false,
    afterLogin: true,
  },
  {
    name: 'Logout',
    link: '/logout',
    beforeLogin: false,
    afterLogin: true,
  },
];

function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  const verifyLogin = async (email, password) => {
    const res = auth.authenticate(email, password);
    return res;
  };

  useEffect(() => {
    if (sessionStorage.getItem('AuthToken')) {
      setLogIn(true);
    }
  }, []);

  return (
    <Router>
      <>
        <Header
          brandName="Binge Watcher's Twitter"
          isLoggedIn={isLoggedIn}
          navs={navLinks}
        />
        <Routes>
          <Route path="/" element={<TrendingTweets />} />
          <Route path="/trending" element={<Grid />} />
          <Route
            path="/auth"
            element={
              <Landing
                loginVerifier={verifyLogin}
                loginCallback={setLogIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout loginCallback={setLogIn} />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
