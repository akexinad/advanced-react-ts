import React, { FC, useState } from "react";
import axios from "axios";

import { Post } from "../../interfaces";

import styles from "./FullPost.module.css";

interface FullPostProps {
    postId: number | null;
}

const FullPost: FC<FullPostProps> = ({ postId }) => {
    const [selectedPost, setSelectedPost] = useState<Post>({
        title: "",
        body: "",
        author: ""
    });

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
