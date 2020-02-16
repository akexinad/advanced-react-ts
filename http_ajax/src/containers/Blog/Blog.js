import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

import "./Blog.css";

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res);

            // fetching too much data;
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "Fellini"
                };
            });

            this.setState({
                posts: updatedPosts
            });
        });
    };

    _postSelected = postId => {
        this.setState({
            selectedPostId: postId
        });
    };

    renderPosts = () =>
        this.state.posts.map(post => (
            <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this._postSelected(post.id)}
            />
        ));

    render() {
        return (
            <div>
                <section className="Posts">{this.renderPosts()}</section>
                <section>
                    <FullPost postId={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
