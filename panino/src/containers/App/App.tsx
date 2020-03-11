import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "../../hoc/Layout/Layout";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Checkout from "../Checkout/Checkout";

import styles from "./App.module.css";

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <h1>Oh Look! Panini!</h1>
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/" exact component={BurgerBuilder} />
                </Switch>
            </Layout>
        </div>
    );
};

export default App;
