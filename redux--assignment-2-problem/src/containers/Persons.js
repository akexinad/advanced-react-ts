import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { ADD_USER, DELETE_USER } from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddUserHandler} />
        {this.props.usrs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeleteUserHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usrs: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUserHandler: (user) => {
      dispatch({
        type: ADD_USER,
        user
      });
    },
    onDeleteUserHandler: (id) => {
      dispatch({
        type: DELETE_USER,
        userId: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
