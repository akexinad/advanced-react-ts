import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { IPost } from "../../interfaces";

import styles from "./FullPost.module.css";

interface FullPostProps {
    postId: IPost["id"];
}

const FullPost: FC<FullPostProps> = ({ postId }) => {
    const [loadedPost, setLoadedPost] = useState<IPost | null>(null);

    useEffect(() => {
        if (postId) {
            if (!loadedPost || (loadedPost && loadedPost.id !== postId)) {
                axios
                    .get(`/posts/${postId}`)
                    .then((res: AxiosResponse<IPost>) => {
                        console.log("res.data", res.data);
                        setLoadedPost(res.data);
                    });
            }
        }
    }, [postId, loadedPost]);

    const _deletePost = () => {
        axios.delete(`/posts/${postId}`).then(res => console.log(res));
    };

    const renderPost = () => {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

        if (postId) {
            post = <p style={{ textAlign: "center" }}>Loading...!</p>;
        }

        if (loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{loadedPost.title}</h1>
                    <p>{loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button onClick={_deletePost} className={styles.Delete}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        }

        return post;
    };

    return renderPost();
};

export default FullPost;