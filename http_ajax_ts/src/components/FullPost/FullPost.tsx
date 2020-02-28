import React, { FC, useState, useEffect } from "react";
import axios from "axios";

import { IPost } from "../../interfaces";

import styles from "./FullPost.module.css";

interface FullPostProps {
    postId: IPost["id"];
}

const FullPost: FC<FullPostProps> = ({ postId }) => {
    const [selectedPost, setSelectedPost] = useState<IPost>({
        id: "",
        title: "",
        body: "",
        author: ""
    });

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => setSelectedPost(res.data));
    }, []);

    return postId ? (
        <div className={styles.FullPost}>
            <h1>{selectedPost.title}</h1>
            <p>{selectedPost.body}</p>
            <div className={styles.Edit}>
                <button className={styles.Delete}>Delete</button>
            </div>
        </div>
    ) : (
        <p style={{ textAlign: "center" }}>Please select a Post!</p>
    );
};

export default FullPost;
