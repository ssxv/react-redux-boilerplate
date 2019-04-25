import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from '../../app/components/NotFound';
import { routes } from '../routesConfig';


class Routes extends React.Component<any, any> {

    renderRoutes(routes) {
        let routeList = [];

        routes.forEach(({ component: Component, path, ...rest }) => {
            routeList.push(
                <Route
                    exact
                    key={path}
                    path={path}
                    render={props => { let combinedProps = { ...rest, ...props }; return <Component {...combinedProps} /> }}
                    {...rest}
                />
            );
        });

        routeList.push(<Route key="notFound" component={NotFound} />);

        return routeList;
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        {this.renderRoutes(routes)}
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Routes;
