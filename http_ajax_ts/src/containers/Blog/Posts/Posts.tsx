import React, { FC, useState, useEffect } from "react";
import { BrowserRouterProps } from "react-router-dom";

import axios from "../../../utils/axios";

import Post from "../../../components/Post/Post";

import { IPost } from "../../../interfaces";

import styles from "./Posts.module.css";

const Posts: FC<BrowserRouterProps> = (props: BrowserRouterProps) => {
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
        setSelectedPostId(postId);
    };

    const renderPosts = () => {
        if (error) {
            return <p style={{ textAlign: "center" }}>There was error</p>;
        }

        return posts.map((post: IPost) => (
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                clicked={() => _postSelected(post.id)}
            ></Post>
        ));
    };

    return <section className={styles.Posts}>{renderPosts()}</section>;
};

export default Posts;
