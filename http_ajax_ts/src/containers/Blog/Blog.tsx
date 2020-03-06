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
            {/* <Route path="/" exact render={() => <Posts />} /> */}
            <Route path="/home" render={() => <h1>home</h1>} />
            <Route path="/posts" exact component={Posts}/>
        </div>
    );
};

export default Blog;
