import React, { Suspense, lazy, useEffect } from "react";
import { Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home/Home'));
const Login = lazy(() => import('../Forms/Login/Login'));
const ForgotPassword = lazy(() => import('../Forms/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('../Forms/ResetPassword/ResetPassword'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));


const RouterApp = (props) => {
    const { history } = props;
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);
    return (
        <Suspense fallback={<div>holla</div>}>
            <Router history={props.history}>
                <Switch>
                    <Route
                        path='/'
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
                        path='/reset-password'
                        render={props => <ResetPassword {...props} />}
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