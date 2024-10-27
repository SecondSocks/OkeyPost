import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import type { IInput } from '../../types'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.container}>
            <h3>Выполните вход в ваш личный кабинет</h3>
           <form>
                <Input data={{
                    legend: 'Номер телефона:',
                    type: 'text'
                }} />
                <Input data={{
                    legend: 'Ваш email:',
                    type: 'text'
                }} />
                <Input data={{
                    legend: 'Ваш пароль:',
                    type: 'password'
                }} />
           </form>
           <p>
                <Link to="/identify">Восстановление пароля</Link> или <Link to="/register">быстрая регистрация</Link>
           </p>
        </div>
    )
}
