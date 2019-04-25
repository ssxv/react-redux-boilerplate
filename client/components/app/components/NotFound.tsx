import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';

interface Props { }

class NotFound extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state);
    }

    render() {
        return (
            <div>
                <div className="text-center pt-5">
                    <h1>404</h1>
                    <h3>the page you seek does not exist</h3>
                </div >
                <div className="text-center pt-5">
                    <Link to={'/'}>{'Go To Home Page'}</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(NotFound);
