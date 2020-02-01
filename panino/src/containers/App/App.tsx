import React from "react";

import styles from "./App.module.css"
import Layout from "../../components/Layout/Layout";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <h1>Panino</h1>
            <Layout>
                <h2>Layout component</h2>
                <BurgerBuilder />
            </Layout>
        </div>
    );
};

export default App;