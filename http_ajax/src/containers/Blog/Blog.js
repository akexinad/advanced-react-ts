import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
    state = {
        posts: []
    };

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res);

            this.setState({
                posts: res.data
            });
        });
    };

    renderPosts = () =>
        this.state.posts.map(post => (
            <Post key={post.id} title={post.title} authorId={post.userId} />
        ));

    render() {
        return (
            <div>
                <section className="Posts">{this.renderPosts()}</section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
