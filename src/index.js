import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
if (localStorage.getItem('testFormState') === null) {
    localStorage.setItem('testFormState', JSON.stringify([0, 0, 0, 0, 0, 0]));

}
if (localStorage.getItem('stepFormState') === null) {
    localStorage.setItem('stepFormState', JSON.stringify(0));

}
if (localStorage.getItem('inputFormState') === null) {
    localStorage.setItem('inputFormState', JSON.stringify({
        fio: "",
        state: "",
        error: false
    }));
}
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals