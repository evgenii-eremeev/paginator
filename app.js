import React from 'react';
import ReactDOM from 'react-dom';

import Paginator from './app/Paginator.js';

function App () {
    return (
        <div>
            <Paginator />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
