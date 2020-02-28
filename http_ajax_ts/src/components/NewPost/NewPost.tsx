import React, { useState, ChangeEvent } from "react";
import axios from "axios";

import { API_URL } from "../../utils/api";

import styles from "./NewPost.module.css";
import { IPost } from "../../interfaces";

const NewPost = () => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        author: "Fellini"
    });

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
        axios
            .post<IPost>(API_URL, post)
            .then(res => console.log(res));
    }
        
    return (
        <div className={styles.NewPost}>
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
