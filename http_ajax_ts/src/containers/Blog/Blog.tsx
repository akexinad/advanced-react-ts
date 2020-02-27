import React, { useState, useEffect, FC } from "react";
import axios from "axios";

const Blog: FC = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log("res", res);
        });
    }, []);

    return (
        <div>
            {/* <section className="Posts">{this.renderPosts()}</section> */}
            <section>
                <h2>This is a full post</h2>
                {/* <FullPost postId={this.state.selectedPostId} /> */}
            </section>
            <section>
                {/* <NewPost /> */}
                <h2>This is a new post</h2>
            </section>
        </div>
    );
};

export default Blog;
