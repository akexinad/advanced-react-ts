import React, { FC } from "react";
import { Route } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

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
            <Route path="/" exact component={Posts}/>
            <Route path="/new-post" exact component={NewPost}/>
        </div>
    );
};

export default Blog;
