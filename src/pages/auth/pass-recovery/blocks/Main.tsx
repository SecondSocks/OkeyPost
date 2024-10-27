import { Form } from '../molecules/Form'
import { Title } from '../molecules/Title'
import styles from './Main.module.scss'

export function Main() {
    return (
        <div className={styles.container}>
           <Title />
           <Form />
        </div>
    )
}
