import React from "react";

import styles from "./App.module.css"
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <h1>Panino</h1>
            <Layout>
                <p>Layout component</p>
            </Layout>
        </div>
    );
};

export default App;
