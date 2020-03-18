import React from "react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import Post, { PostProps } from "./Post";



test("Post Component", () => {
    const id: PostProps["id"] = "abc123";
    const _clicked = (id: PostProps["id"]) => null;

    const component = renderer.create(
        <BrowserRouter>
            <Post
                id="abc123"
                title={"post title"}
                author={"post author"}
                clicked={() => _clicked(id)}
            />
        </BrowserRouter>
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});
