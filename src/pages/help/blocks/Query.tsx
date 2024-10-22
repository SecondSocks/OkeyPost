import { QueryInput } from '../atoms/QueryInput'
import styles from './Query.module.scss'

export function Query() {
    return (
        <div className={styles.container}>
           <QueryInput />
        </div>
    )
}
