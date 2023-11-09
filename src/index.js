import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
const app = ReactDOM.createRoot(document.getElementById('mainmenu'));
app.render(
    <React.StrictMode>
<App />
</React.StrictMode>
);
