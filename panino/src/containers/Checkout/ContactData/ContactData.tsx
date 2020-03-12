import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";

import styles from "./ContactData.module.css";

const ContactData = () => {
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        address: {
            street: "",
            postCode: ""
        }
    });

    const _clicked = () => {
        console.log("clicked");
    }

    return (
        <div className={styles.ContactData}>
            <h4>Enter Your Contact Details</h4>
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your Name"/>
                <input className={styles.Input} type="text" name="email" placeholder="Your Email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Your Street"/>
                <input className={styles.Input} type="text" name="postCode" placeholder="Your Post Code"/>
                <Button btnType="Success" clicked={_clicked}>ORDER</Button>
            </form>
        </div>
    )
};

export default ContactData;
