import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  state = {
    title: ""
  };

  parseQuery = props => {
    const query = new URLSearchParams(props.location.search);

    for (let param of query.entries()) {
      console.log(param); // yields ['start', '5']
      this.setState({
        title: param[1]
      });
    }
  };

  componentDidMount = () => {
    this.parseQuery(this.props);
  };

  componentDidUpdate = (prevProps) => {
      if (this.props.location.search !== prevProps.location.search) {
        this.parseQuery(prevProps);
      }
  };

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
