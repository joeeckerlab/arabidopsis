import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    // <React.StrictMode>
    <ContextProvider basename={`/${process.env.PUBLIC_URL}`}>
        <App />
    </ContextProvider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
