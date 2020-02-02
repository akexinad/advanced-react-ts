import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import styles from "./NavigationItems.module.css";

const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</ NavigationItem>
        <NavigationItem link="/" active={false}>Checkout</ NavigationItem>
    </ul>
)

export default NavigationItems;