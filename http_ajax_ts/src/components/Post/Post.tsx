import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { IPost } from "../../interfaces";

import styles from "./Post.module.css";

export interface PostProps extends RouteComponentProps {
    id: IPost["id"];
    title: IPost["title"];
    author: IPost["author"];
    clicked: (id: IPost["id"]) => void;
}

const Post: FC<PostProps> = ({ id, title, author, clicked }) => (
    <article className={styles.Post} onClick={() => clicked(id)}>
        <h1>{title}</h1>
        <div className={styles.Info}>
            <div className={styles.Author}>{author}</div>
        </div>
    </article>
);

export default withRouter(Post);
