import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

console.log("hello world");

axios.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    },
    error => {
        console.error(error);

        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        console.log(response);
        return response;
    },
    error => {
        console.error(error);

        return Promise.reject(error);
    }
);


/**
 * 
 * If you want to eject your interceptor, you can stor it in a variable and call
 * the eject method:
 * 
 * const myInterceptor = axios.interceptors.request.use(() => return ruquest)
 * 
 * axios.interceptors.request.eject(myInterceptor)
 * 
 */

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
