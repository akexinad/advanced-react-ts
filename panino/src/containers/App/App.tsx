import "./App.module.css";

import React from "react";
import { useForm } from "react-hook-form";

interface IReactHookForm {
    firstName: string;
    lastName: string;
    email: string;
    gender: "Male" | "Female";
    username: string;
    aboutYou: string;
}

const App: React.FC = () => {
    const { register, handleSubmit, errors } = useForm<IReactHookForm>();
    const onSubmit = (data: any) => {
        console.log("data", data);
    };

    const sleep = (ms: number) =>
        new Promise(resolve => setTimeout(resolve, ms));

    const validateUsername = async (value: string) => {
        await sleep(1000);

        if (value === "bill") return true;

        return false;
    };

    return (
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <label>First Name:</label>
            <input
                name="firstName"
                ref={register({ required: true, minLength: 4 })}
            />
            {errors.firstName && errors.firstName.type === "required" && (
                <p>This is required</p>
            )}
            {errors.firstName && errors.firstName.type === "minLength" && (
                <p>Please use at least 4 characters</p>
            )}

            <label>Last Name:</label>
            <input name="lastName" ref={register({ required: true })} />
            {errors.lastName && <p>This is required</p>}

            <label>Gender</label>
            <select name="gender" ref={register({ required: true })}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errors.gender && <p>This is required</p>}

            <label>Username</label>
            <input
                name="username"
                ref={register({ required: true, validate: validateUsername })}
            />
            {errors.username && (
                <p>This is required</p>
            )}

            <label>Email</label>
            <input name="email" ref={register({ required: true })} />
            {errors.email && <p>This is required</p>}

            <label>About you</label>
            <textarea name="aboutYou" ref={register({ required: true })} />
            {errors.aboutYou && <p>This is required</p>}

            <input type="submit" />
        </form>
    );
};

export default App;
