import { GreenButton } from '../../components/green-button/Button'
import styles from './Form.module.scss'

export function Form() {
    return (
        <div className={styles.container}>
           <form>
                <input type='text' placeholder='Введите ссылку на товар' />
           </form>
           <div className={styles.submit}>
                <GreenButton text={'Отправить'} width={240} height={66} />
                <p>Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности</p>
           </div>
        </div>
    )
}
