import * as React from 'react';


interface Props {
}

class HomePage extends React.Component<Props, any> {
    constructor(props, state) {
        super(props, state);
    }

    render() {
        return (
            <div>{'This is the Home Page - Find "HomePage.tsx" to make changes here.'}</div>
        );
    }
}

export default HomePage;
