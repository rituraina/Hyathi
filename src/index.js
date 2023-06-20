import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

const AppWrapper = () => {
  return (
      <App />
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

 
