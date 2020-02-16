import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPost: {}
        };
    }

    componentDidMount = () => {
        console.log(this.props);

        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${this.props.postId}`
            )
            .then(res =>
                this.setState({
                    selectedPost: res.data
                })
            );

        console.log(this.state.selectedPost);
    };

    render() {
        console.log(this.state);
        
        
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

        if (this.props.postId) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;
