import * as React from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes/components/Routes';
import LoadingSpinner from '../../loadingSpinner/components/LoadingSpinner';
import { stateInterface } from '../../../store/store';
import { setWidthAction, setTiltAction, viewportActionInterface } from '../actions/viewportAction'
import { localStorageActionInterface, loadUserFromStorageAction } from '../actions/localStorageActions';


interface Props extends viewportActionInterface, localStorageActionInterface {
    loader?: any;
}

class App extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        if (typeof window !== 'undefined') {
            this.props.setWidthAction(window.innerWidth);
            window.addEventListener('orientationchange', this.handleOrientationChange);
            window.addEventListener('resize', this.handleSizeChange);
            window.addEventListener('storage', this.handleLocalStorageChange);
        }
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleOrientationChange = (event) => {
        this.props.setTiltAction(event.target.orientation ? true : false);
    }

    handleSizeChange = (event) => {
        this.props.setWidthAction(event.target.outerWidth);
    }

    handleLocalStorageChange = () => {
        const user = localStorage.user ? JSON.parse(localStorage.user) : null;
        this.props.loadUserFromStorageAction({ user });
    }

    render() {
        const { loader } = this.props;
        return (
            <React.Fragment>
                {loader.loading && <LoadingSpinner message={loader.message} fullscreen={true} />}
                <Routes />
            </React.Fragment>
        );
    }
}

export default connect((state: stateInterface) => {
    return {
        loader: state.loader
    }
},
    {
        setWidthAction, setTiltAction, loadUserFromStorageAction
    }
)(App);
