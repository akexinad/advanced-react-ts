import React, { FC, useState, useEffect, Fragment } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

import axios from "../../../utils/axios";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";

import { IPost } from "../../../interfaces";

import styles from "./Posts.module.css";

interface PostsParams {
    postId: IPost["id"];
}

const Posts: FC<RouteComponentProps<PostsParams>> = ({history, match}) => {
    const [posts, setPosts] = useState([
        {
            id: "",
            title: "",
            body: "",
            author: ""
        }
    ]);
    const [error, setError] = useState(false);
    const [, setSelectedPostId] = useState<IPost["id"]>("");

    useEffect(() => {
        axios
            .get("/posts")
            .then(res => {
                const posts: IPost[] = res.data.slice(0, 4);
                const updatedPosts = posts.map((post: IPost) => {
                    return {
                        ...post,
                        author: "Fellini"
                    };
                });

                setPosts(updatedPosts);
                setError(false);
            })
            .catch(error => {
                setError(true);
                console.error(error);
            });
    }, []);

    const _postSelected = (postId: IPost["id"]) => {
        history.push({
            pathname: "/posts/" + postId
        });
        setSelectedPostId(postId);
    };

    const renderPosts = () => {
        if (error) {
            return <p style={{ textAlign: "center" }}>There was error</p>;
        }

        return posts.map((post: IPost, index) => (
            <Post
                key={index}
                id={post.id}
                title={post.title}
                author={post.author}
                clicked={() => _postSelected(post.id)}
            ></Post>
        ));
    };

    return (
        <Fragment>
            <section className={styles.Posts}>{renderPosts()}</section>
            <Route path={match.url + "/:postId"} exact component={FullPost} />
        </Fragment>
    );
};

export default Posts;
