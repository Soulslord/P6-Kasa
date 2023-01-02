import React, { Component } from 'react';
import styles from '../styles/Elements.module.css'; // Import css modules stylesheet as styles

class TestBtn extends Component {
    render() {
        return (
            <button className={styles.btnTest}>
                Bouton de test
            </button>
        );
    }
}

export default TestBtn;