import { useNavigate } from 'react-router-dom'
import { GreenButton } from '../../../components/green-button/Button'
import { Form } from '../molecules/Form'
import styles from './Main.module.scss'

export function Main() {
    const navigate = useNavigate()
    const checkSMS = () => {
        navigate('/pass-recovery')
    }

    return (
        <div className={styles.container}>
            <h3>Введите код из СМС для водтверждения</h3>
            <Form />
        </div>
    )
}
