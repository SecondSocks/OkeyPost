import type { IInput } from '../types'
import styles from './Input.module.scss'

interface Props {
    data: IInput
}

export function Input({data}: Props) {
    return (
        <div className={styles.container}>
            <legend>{data.legend}</legend>
            <input type={data.type} />
        </div>
    )
}
