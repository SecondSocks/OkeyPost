import { Card } from '../atoms/Card'
import type { ICard } from '../types'
import styles from './MainContent.module.scss'

export function MainContent() {
    const contents: ICard[] = [
        {
            imgSrc: 'bonuses-icon1.png',
            title: 'Дарим скидку 10% вашим друзьям и подписчикам',
            description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.'
        },
        {
            imgSrc: 'bonuses-icon2.png',
            title: 'Платим по £3 за отправленную посылку ',
            description: 'Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.'
        },
        {
            imgSrc: 'bonuses-icon3.png',
            title: 'Промо на любой вкус',
            description: 'Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.'
        },
        {
            imgSrc: 'bonuses-icon4.png',
            title: 'Выплаты по запросу',
            description: 'Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.'
        },
        {
            imgSrc: 'bonuses-icon5.png',
            title: 'Начисляем кэшбэк £1 на 1 посылку',
            description: 'За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов'
        }
    ]

    return (
        <div className={styles.container}>
           <h2>Зарабатывать с нами — проще простого:</h2>
            <div className={styles.cards}>
                {contents.map(item => (
                    <Card data={{
                        title: item.title,
                        imgSrc: item.imgSrc,
                        description: item.description
                    }} key={item.title} />
                ))}
            </div>
        </div>
    )
}
