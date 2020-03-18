import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import Button from "./Button";

const buttonLabel = "click me";
const buttonComponent = <Button label={buttonLabel} />;

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(buttonComponent, div);
});

it("renders correctly", () => {
    const { getByTestId } = render(buttonComponent);
    getByTestId("button");

    // This will pass because it matches the snapshot.
    expect(getByTestId("button")).toHaveTextContent(buttonLabel + "FOO");

    // This will fail because the label has been changed.
    expect(getByTestId("button")).toHaveTextContent(buttonLabel);
});


/**
 * Why are snapshots useful?
 * 
 * When you commit the code, the test suite will be able to check committed snapshots when another engineer makes a change.
 */

it("matches the snapshot", () => {
    const tree = renderer.create(buttonComponent).toJSON();
    expect(tree).toMatchSnapshot();
});
