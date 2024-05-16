import { ComponentProps } from "react";

import styles from './Input.module.css';

type InputProps = ComponentProps<'input'> & {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>{label}</label>
      <input className={styles.input} id={props.name} {...props} />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}