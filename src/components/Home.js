import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory()

    return (
        <div>
            <h2>Looking to Order a Pizza?</h2>
            <button onClick={() => history.push('/pizza')}>Pizza?</button>
        </div>
    )
};

export default Home;