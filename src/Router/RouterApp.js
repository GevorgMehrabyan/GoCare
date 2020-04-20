import React, { Suspense, lazy, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const Home = lazy(() => import('../Pages/Home/Home'));
const Management = lazy(() => import('../Pages/Management/Management'));
const Login = lazy(() => import('../Forms/Login/Login'));
const ForgotPassword = lazy(() => import('../Forms/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('../Forms/ResetPassword/ResetPassword'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const token = localStorage.getItem('token');

const RouterApp = (props) => {
  const { history } = props;
  useEffect(() => {
    if (!token || history.location.pathname === '/') {
      history.push('/login')
    }
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, []);

  return (
    <Suspense fallback={<Spin size="large"/>}>
      <Router history={props.history}>
        <Switch>
          <Route
            path='/home'
            render={props => <Home {...props} />}
            exact
          />
          <Route
            path='/login'
            render={props => <Login {...props} />}
            exact
          />
          <Route
            path='/forgot-password'
            render={props => <ForgotPassword {...props} />}
            exact
          />
          <Route
            path='/reset-password/:token'
            render={props => <ResetPassword {...props} />}
            exact
          />
          <Route
            path='/management'
            render={props => <Management {...props} />}
            exact
          />
          <Route
            render={props => <NotFound {...props} />}
            exact
          />
        </Switch>
      </Router>
    </Suspense>
  )
}


export default RouterApp;