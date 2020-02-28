import React, { useState, ChangeEvent } from "react";

import styles from "./NewPost.module.css";

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
            content: e.target.value,
            author: post.author
        });

    return (
        <div className={styles.NewPost}>
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={_updateTitle} />
            <label>Content</label>
            <textarea rows={4} value={post.content} onChange={_updateContent} />
            <label>Author</label>
            <select
                value={post.author}
                onChange={_updateAuthor}
            >
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button>Add Post</button>
        </div>
    );
};

export default NewPost;
