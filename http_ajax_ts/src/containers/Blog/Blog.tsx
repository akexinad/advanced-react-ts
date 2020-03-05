import React, { FC } from "react";
import { Route } from "react-router-dom";

import Posts from "./Posts/Posts";

import styles from "./Blog.module.css";

const Blog: FC = () => {
    return (
        <div className={styles.Blog}>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/new-post">New Post</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Route path="/" render={() => <Posts />} />
            <Route path="/home" exact render={() => <h1>home</h1>} />
        </div>
    );
};

export default Blog;
