import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import HouseContextProvider from './components/HouseContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <HouseContextProvider>
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </HouseContextProvider>
);
