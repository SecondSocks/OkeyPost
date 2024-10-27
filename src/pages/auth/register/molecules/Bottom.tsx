import { Link, useNavigate } from 'react-router-dom'
import { GreenButton } from '../../../components/green-button/Button'
import styles from './Bottom.module.scss'

export function Bottom() {
    const navigate = useNavigate()

    const register = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
           <p>
                Нажимая на кнопку вы соглашаетесь с <a href="#">правилами предоставления услуг</a> и <a href="#">политикой конфиденциальности</a>
           </p>
           <div className={styles.action}>
                <GreenButton text={'Получить адрес в UK'} width={210} height={60} func={register} />
                <p>Уже зарегестрированы?<Link to='/login'>Выполните вход</Link></p>
           </div>
        </div>
    )
}
