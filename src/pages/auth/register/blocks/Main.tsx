import { Bottom } from '../molecules/Bottom'
import { Form } from '../molecules/Form'
import styles from './Main.module.scss'

export function Main() {
    return (
        <div className={styles.container}>
           <Form />
           <Bottom />
        </div>
    )
}
