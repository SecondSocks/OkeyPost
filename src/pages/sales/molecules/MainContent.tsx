import { useState } from 'react'
import styles from './MainContent.module.scss'
import { CardList } from './CardList'

export function MainContent() {
    const cardsContent = [
        {
            imgSrc: 'sales-shop1.png',
            title: 'Abercrombie & Fitch',
            description: 'цены от <b>£7.99 (3365₽)</b> разделе: мужские вещи: <span>CLEARANCE</span> женские вещи: <span>CLEARANCE</span><br/><br/>качественные детские вещи на <span>Abercrombie kids</span>',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop2.png',
            title: 'Timberland',
            description: 'NEW!<br>Коллаб <span>Tommy Hilfiger x Timberland!</span><br/><br/>Ботинки от <b>£7.99 (3365₽)</b><br/>Зимние шапки за <b>£7.99 (3365₽)</b>',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop3.png',
            title: 'Polo Ralph Lauren',
            description: '<span>Рубашка</span> за <b>£7.99 (3365₽)</b><br/><span>Худи</span> за <b>£7.99 (3365₽)</b><br/><span>Свитшот</span> с лого за <b>£7.99 (3365₽)</b>',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop4.png',
            title: 'Hollister Co.',
            description: 'цены от <b>£7.99 (3365₽)</b> разделе:<br/>мужские вещи: <span>CLEARANCE</span><br/>женские вещи: <span>CLEARANCE</span>',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop5.png',
            title: 'Michael Kors',
            description: '<b>Новая коллекция!<br/>Michael Kors x 007 (James Bond)</b><br/><b>HOLIDAY HEAD START</b><br/><b>-60%</b> на сумки, обувь и одежду',
            link: 'В магазин →'
        },
        {
            imgSrc: 'sales-shop6.png',
            title: 'Аутлет Saks OFF 5TH',
            description: '<b>Black Friday Early Access</b> Брендовые шапки, шарфы и перчатки - <b>60% OFF</b><br/><br/>Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop7.png',
            title: "Victoria's Secret",
            description: '<b>Лосьоны и мисты за £7.99 (3365₽) 7 трусиков за £7.99 (3365₽)</b> Халаты за <b>£7.99 (3365₽)</b><br/><br/><b>Потрать £7.99 (3365₽)</b> - получи <b>купон на $25</b> на следующий заказ',
            link: 'В магазин →'
        },
        {
            imgSrc: 'sales-shop8.png',
            title: 'levi.com',
            description: '<span>Джинсы</span> от <b>£7.99 (3365₽)</b><br/><br/><br/><b>Скидка 30% на заказы от $100 с кодом TREAT30</b>',
            link: 'В магазин →'
        },
        {
            imgSrc: 'sales-shop9.png',
            title: 'UGG® - вход с VPN',
            description: 'Угги за <b>£7.99 (3365₽)</b> Ботинки UGG от <b>£7.99 (3365₽)</b> в разделе <span>SALE</span><br/><br/><span>Мужские угги</span> за <b>£7.99 (3365₽)</b> <span>Слипперы</span> за <b>£7.99 (3365₽)</b>',
            link: 'Только выкуп с оператором →'
        },
        {
            imgSrc: 'sales-shop10.png',
            title: 'New Balance',
            description: '<b>Вход с VPN<br> - 30%</b> на некоторые модели <b>Бесплатная</b> доставка <b>$50+</b>',
            link: 'Только выкуп с оператором →'
        },
    ]

    const [posts, setPosts] = useState(cardsContent)

    return (
        <div className={styles.container}>
           <h2>
                Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!
           </h2>
           <CardList posts={posts} currentPage={1} limitPostsOnPage={8} />
        </div>
    )
}
