import { Button } from '../../components/green-button/Button'
import { ReviewCard } from '../atoms/ReviewCard'
import styles from './RatingReviews.module.scss'

export function RatingReviews() {
    return (
        <div className={styles.container}>
           <h2>Отзывы и цитаты блогеров:</h2>
           <div className={styles.reviews}>
                <ReviewCard data={{
                    imgSrc: 'image-review1.png',
                    name: 'Nikolay S',
                    rating: 5,
                    comment: 'Ваша доставка самая быстрая и дешевая!',
                    date: '16 ноября 2021',
                    city: 'Санкт-Петербург'
                }}/>
                <ReviewCard data={{
                    imgSrc: 'image-review2.png',
                    name: 'Dmitriy D',
                    rating: 5,
                    comment: 'Пуховик Levi’s c eBay. Всё приехало быстро и целым.',
                    date: '16 ноября 2021',
                    city: 'Санкт-Петербург'
                }}/>
                <ReviewCard data={{
                    imgSrc: 'image-review3.png',
                    name: 'Vladimir E',
                    rating: 5,
                    comment: 'Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики от Apple пришли в простом бумажном пакете )',
                    date: '16 ноября 2021',
                    city: 'Санкт-Петербург'
                }}/>
                <ReviewCard data={{
                    imgSrc: 'image-review4.png',
                    name: 'Оксана',
                    rating: 5,
                    comment: 'Очень быстро, надежно! Как всегда большое спасибо за работу!',
                    date: '16 ноября 2021',
                    city: 'Санкт-Петербург'
                }}/>
           </div>
           <Button text={"Все отзывы"} width={240} height={66}/>
        </div>
    )
}
