import React, { Fragment } from "react";
import "./App.css";
import { Validation } from "./components/ValidationComponent";
import { Char } from "./components/CharComponent";

class App extends React.Component {
    state = {
        userInput: "",
        userInputChars: []
    };

    public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userInputChars = event.target.value.split("");

        this.setState({ userInput: event.target.value, userInputChars });
    };

    public handleDeleteCharacter = (index: number) => {
        const charsToBeUpdated = [...this.state.userInputChars];

        charsToBeUpdated.splice(index, 1);

        const inputToBeUpdated = charsToBeUpdated.join("");

        this.setState({
            userInput: inputToBeUpdated,
            userInputChars: charsToBeUpdated
        });
    };

    public renderInputCharacters = () => {
        return (
            <Fragment>
                {this.state.userInputChars.map((character, index) => (
                    <Char
                        key={index}
                        propKey={index}
                        inputCharacter={character}
                        deleteCharacter={() => this.handleDeleteCharacter(index)}
                    />
                ))}
            </Fragment>
        );
    };

    render() {
        return (
            <div className="App">
                <h2>Assignment 2</h2>
                <input
                    type="text"
                    onChange={e => this.handleInputChange(e)}
                    value={this.state.userInput}
                />
                <h3>{this.state.userInput}</h3>
                <Validation userInput={this.state.userInput} />
                {this.renderInputCharacters()}
            </div>
        );
    }
}

export default App;
