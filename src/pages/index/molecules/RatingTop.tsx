import { RatingCard } from '../atoms/RatingCard'
import styles from './RatingTop.module.scss'

export function RatingTop() {
    return (
        <div className={styles.container}>
           <h2>120 000 довольных клиентов в России уже сделали свой выбор</h2>
           <p>За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва</p>
           <div className={styles.cards}>
                <RatingCard data={{
                    imgSrc: 'money-time-icon.png',
                    title: 'Больше не значит дороже',
                    description: 'С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.'
                }} />
                <RatingCard data={{
                    imgSrc: 'speed-time-icon.png',
                    title: 'Быстрая обработка посылок',
                    description: 'Посылка обрабатывается не дольше 48 часов после поступления на склад.'
                }} />
                <RatingCard data={{
                    imgSrc: 'sms-icon.png',
                    title: 'SMS-уведомления',
                    description: 'Отслеживайте весь процесс с помощью sms-уведомлений.'
                }} />
           </div>
        </div>
    )
}
