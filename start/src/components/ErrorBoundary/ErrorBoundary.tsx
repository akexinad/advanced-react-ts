import React, { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ""
    };

    componentDidCatch = (error: Error, info: ErrorInfo) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    };

    render() {
        if (this.state.hasError) {
            return <h1>There was error!</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
