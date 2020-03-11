import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Course extends Component {
    render () {
        console.log('this.props', this.props)
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: _ID_</p>
            </div>
        );
    }
}

export default withRouter(Course);