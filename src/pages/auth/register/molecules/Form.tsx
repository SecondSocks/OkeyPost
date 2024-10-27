import { Input } from '../../components/Input'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.container}>
           <h3>Начните совершать покупки в английских магазинах</h3>
           <Input data={{
                legend: 'Имя:',
                type: 'text'
           }} />
           <Input data={{
                legend: 'Фамилия:',
                type: 'text'
           }} />
           <Input data={{
                legend: 'Email:',
                type: 'text'
           }} />
        </div>
    )
}
