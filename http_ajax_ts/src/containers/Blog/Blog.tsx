import React, { useState, useEffect, FC } from "react";
import axios from "../../utils/axios";

import { IPost } from "../../interfaces";

import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";
import Post from "../../components/Post/Post";

import styles from "./Blog.module.css";

const Blog: FC = () => {
    const [posts, setPosts] = useState([
        {
            id: "",
            title: "",
            body: "",
            author: ""
        }
    ]);
    const [error, setError] = useState(false);
    
    const [selectedPostId, setSelectedPostId] = useState<IPost["id"]>("");

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
                setError(true)
                console.error(error);
            });

    }, [posts]);

    const _postSelected = (postId: IPost["id"]) => {
        setSelectedPostId(postId);
    };

    const renderPosts = () => {

        if (error) {
            return <p style={{textAlign: "center"}}>There was error</p>
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
    }

    return (
        <div className={styles.Blog}>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/new-post">New Post</a></li>
                    </ul>
                </nav>
            </header>
            <section className={styles.Posts}>{renderPosts()}</section>
            <section>
                <h2>This is a full post</h2>
                <FullPost postId={selectedPostId} />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
};

export default Blog;
