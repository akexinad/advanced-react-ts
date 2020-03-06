import React, { FC } from "react";
import { Route, Link } from "react-router-dom";

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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</Link>
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
