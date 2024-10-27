import { Input } from '../../components/Input'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.container}>
           <Input data={{
                    legend: 'Код и СМС:',
                    type: 'text'
            }} />
        </div>
    )
}
