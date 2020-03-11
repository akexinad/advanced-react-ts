import React, { FC, useState, useEffect, Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import AsyncComponent from "../../hoc/AsyncComponent";

import styles from "./Blog.module.css";

const AsyncNewPost = AsyncComponent(() => {
    return import("./NewPost/NewPost");
});

/**
 * To style the links, you will have to use the NavLink object and not
 * the regular Link object provided by React.
 */

const Blog: FC = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(true);
        return () => {
            setAuth(false);
        };
    }, [auth]);

    return (
        <div className={styles.Blog}>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                activeClassName={styles.active}
                                to="/posts"
                                exact
                            >
                                Posts
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
            <Switch>
                {auth ? (
                    <Route path="/new-post" component={AsyncNewPost} />
                ) : null}
                <Route path="/posts" component={Posts} />
                {/* This is how you can handle routes without a path. */}
                <Route
                    render={() => (
                        <Fragment>
                            <h1 style={{color: "red"}}>...Not found...</h1>
                            <h2>
                                This is a way you can handle routes that do not exist or that
                                come from a 404 error.
                            </h2>
                        </Fragment>
                    )}
                />
                {/* <Redirect from="/" to="/posts" /> */}
            </Switch>
        </div>
    );
};

export default Blog;
