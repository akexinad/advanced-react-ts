import React, { useState, useEffect, FC } from "react";
import axios, { AxiosResponse } from "axios";

import { API_URL } from "../../utils/api";

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
            .get(API_URL)
            .then((res: AxiosResponse<IPost[]>) => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Fellini"
                    };
                });

                setPosts(updatedPosts);
                setError(false);
            })
            .catch(error => setError(true));
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
        <div>
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
