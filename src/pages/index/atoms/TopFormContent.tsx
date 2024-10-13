import styles from './TopFormContent.module.scss'

export function TopFormContent() {
    return (
        <div className={styles.container}>
           <h3>
                OkeyPost удобная и быстрая доставка посылок из Великобритании
            </h3>
            <p>
                Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными.
            </p>
        </div>
    )
}
