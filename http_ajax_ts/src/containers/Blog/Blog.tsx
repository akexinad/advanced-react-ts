import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import NewPost from "../../components/NewPost/NewPost";
import FullPost from "../../components/FullPost/FullPost";



const Blog: FC = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log("res", res);
        });
    }, []);

    const renderPosts = () => {

        posts.map(post)
        
    }

    return (
        <div>
            {/* <section className="Posts">{this.renderPosts()}</section> */}
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
