import React from "react";
import reactDom from "react-dom";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

reactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root'))