import { Link } from 'react-router-dom'
import { Input } from '../components/Input'
import styles from './index.module.scss'
import { GreenButton } from '../../components/green-button/Button'
import { Main } from './blocks/Main'

export function Login() {
    return (
        <div className={styles.container}>
            <Main />
        </div>
    )
}
