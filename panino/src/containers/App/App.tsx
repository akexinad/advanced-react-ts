import React from "react";

import styles from "./App.module.css";
import Layout from "../../hoc/Layout/Layout";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Checkout from "../Checkout/Checkout";

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <h1>Oh Look! Panini!</h1>
            <Layout>
                <BurgerBuilder />
                <Checkout />
            </Layout>
        </div>
    );
};

export default App;
