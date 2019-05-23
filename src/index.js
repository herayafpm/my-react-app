import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// function getName() {
//     return "Heraya haahh";
// }
// const nama = "HAHAHAH";
// const element = <h1>Hello {getName()}</h1>;
// ReactDOM.render(element,document.getElementById('master'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
