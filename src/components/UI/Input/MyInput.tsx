import React, { InputHTMLAttributes } from 'react';
import styles from './MyInput.module.scss';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput: React.FC<MyInputProps> = (props) => {
    return (
        <input className={styles.myInput} {...props}/>
    );
};

export default MyInput;