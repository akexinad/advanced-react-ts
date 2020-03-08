import React, { FC } from "react";
import { Route, NavLink } from "react-router-dom";

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
                            <NavLink
                                activeClassName={styles.active}
                                to="/"
                                exact
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeStyle={{
                                    color: "#f8923f",
                                    textDecoration: "underline"
                                }}
                                to={{
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: "?quick-submit=true"
                                }}
                            >
                                New Post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Route path="/" exact component={Posts} />
            <Route path="/new-post" exact component={NewPost} />
        </div>
    );
};

export default Blog;
