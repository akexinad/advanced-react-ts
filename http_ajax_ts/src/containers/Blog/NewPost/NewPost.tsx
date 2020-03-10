import React, { useState, ChangeEvent, FC, useEffect } from "react";
import axios from "axios";
import { BrowserRouterProps, Redirect } from "react-router-dom";

import { IPost } from "../../../interfaces";

import styles from "./NewPost.module.css";

const NewPost: FC = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        author: "Fellini"
    });
    const [submitted, setSubmitted] = useState(false);

    const _updateTitle = (e: ChangeEvent<HTMLInputElement>) =>
        setPost({
            title: e.target.value,
            content: post.content,
            author: post.author
        });

    const _updateContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setPost({
            title: post.title,
            content: e.target.value,
            author: post.author
        });

    const _updateAuthor = (e: ChangeEvent<HTMLSelectElement>) =>
        setPost({
            title: post.title,
            content: post.content,
            author: e.target.value
        });

    const _postData = () => {
        axios.post<IPost>("/posts", post).then(res => {
            console.log(res);
            setSubmitted(true);
        });
    };

    const renderRedirect = () => (submitted ? <Redirect to="/posts" /> : null);

    return (
        <div className={styles.NewPost}>
            {renderRedirect()}
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={_updateTitle} />
            <label>Content</label>
            <textarea rows={4} value={post.content} onChange={_updateContent} />
            <label>Author</label>
            <select value={post.author} onChange={_updateAuthor}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
                <option value="Manu">{post.author}</option>
            </select>
            <button onClick={_postData}>Add Post</button>
        </div>
    );
};

export default NewPost;
