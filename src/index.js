import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
axios.post("https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.deal.fields").then((resp) => {
    console.log(resp)
});
axios.post("https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.deal.list").then((resp) => {
    console.log(resp)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
if (localStorage.getItem('testFormState') === null) {
    localStorage.setItem('testFormState', JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

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