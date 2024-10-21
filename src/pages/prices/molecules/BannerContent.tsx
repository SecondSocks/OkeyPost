import { Form } from '../atoms/Form'
import styles from './BannerContent.module.scss'

export function BannerContent() {
    return (
        <div className={styles.container}>
           <img src='price-banner.png' alt='Banner' />
           <div className={styles.form}>
                <h3>Попробуйте заказывать с оператором прямо сейчас. Пришлите ссылку на товар, его купят и доставят на наш склад в кратчайшие сроки.</h3>
                <Form />
           </div>
        </div>
    )
}
