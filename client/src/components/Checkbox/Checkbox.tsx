import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export function Checkbox({ className, ...props }: CheckboxProps) {
	return <input type='checkbox' className={`${className} ${styles.checkbox}`} {...props} />
}
