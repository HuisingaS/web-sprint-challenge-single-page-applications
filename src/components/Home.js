import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory()

    const routeToForm = () => {
        history.push('/form')
    }

    return (
        <div>
            <h1>Click to fill out form</h1>
            <button onClick={routeToForm}>to form</button>
        </div>
    )
};

export default Home;