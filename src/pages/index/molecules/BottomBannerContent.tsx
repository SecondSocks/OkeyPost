import { Button } from '../../components/green-button/Button'
import styles from './BottomBannerContent.module.scss'

export function BottomBannerContent() {
    return (
        <div className={styles.container}>
           <h3>
                Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!
           </h3>
           <div className={styles.form}>
                <form>
                    <input type='text' placeholder='Введите ваш E-Mail' />
                </form>
                <Button text='Подписаться' width={240} height={66} />
           </div>
        </div>
    )
}
