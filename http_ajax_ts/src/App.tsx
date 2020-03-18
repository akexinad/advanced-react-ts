import React from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";
import Button from "./components/button/Button";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Button label={"click me"} />
                </header>
                <h1>Posts</h1>
                <Blog />
            </div>
        </BrowserRouter>
    );
}

export default App;
