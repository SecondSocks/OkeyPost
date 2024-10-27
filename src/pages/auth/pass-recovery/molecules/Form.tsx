import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import styles from './Form.module.scss'
import { GreenButton } from '../../../components/green-button/Button'

export function Form() {
    const navigate = useNavigate()
    const recoveryPassord = () => {
        navigate('/login')
    }

    return (
        <div className={styles.container}>
           <Input data={{
                legend: 'Ваш email:',
                type: 'text'
           }} />
           <p>
                Впомнили пароль? <Link to='/login'>Выполните вход</Link>
           </p>
           <GreenButton text={'Восстановить'} width={200} height={60} func={recoveryPassord}/>
        </div>
    )
}
