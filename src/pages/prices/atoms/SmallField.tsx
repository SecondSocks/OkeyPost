import { IField } from '../types'
import styles from './SmallField.module.scss'

interface Props {
    data: IField
}

export function SmallField({data}: Props) {
    return (
        <div className={styles.container}>
           <h3>{data.title}</h3>
           <div className={styles.price}>
                <h4>{data.price}</h4>
           </div>
        </div>
    )
}
