import React from "react";

import styles from "./App.module.css"
import Layout from "../../hoc/Layout/Layout";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <h1>Oh Look! Panini!</h1>
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>
    );
};

export default App;
