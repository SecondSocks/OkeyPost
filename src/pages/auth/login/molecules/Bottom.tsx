import { useNavigate } from 'react-router-dom'
import { GreenButton } from '../../../components/green-button/Button'
import { Social } from '../atoms/Social'
import styles from './Bottom.module.scss'

export function Bottom() {
    const navigate = useNavigate()

    const login = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <GreenButton text={'Войти'} width={200} height={60} func={login} />
            <Social />
        </div>
    )
}
