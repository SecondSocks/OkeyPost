import { useState } from 'react'
import styles from './Cards.module.scss'
import { CardsList } from './CardsList'

export function Cards() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Интернет-магазин Urban Outfitters в UK: обзор', date: '08.10.2022', imgSrc: 'blog-image1.png', time: '8 минут'},
        {id: 2, title: 'Overstock. Брендовые товары по доступным ценам', date: '08.10.2022', imgSrc: 'blog-image2.png', time: '8 минут'},
        {id: 3, title: 'Skechers с Amazon. Удобная обувь для всей семьи', date: '08.10.2022', imgSrc: 'blog-image3.png', time: '8 минут'},
        {id: 4, title: '16 лучших подарков с Амазона в 2021 году', date: '08.10.2022', imgSrc: 'blog-image4.png', time: '8 минут'},
        {id: 5, title: 'Target — семейный супермаркет с ценами от 300 рублей!', date: '08.10.2022', imgSrc: 'blog-image5.png', time: '8 минут'},
        {id: 6, title: 'Английский магазин RIPNDIP. Покупаем самовыражение', date: '08.10.2022', imgSrc: 'blog-image6.png', time: '8 минут'},
        {id: 7, title: 'Nautica. Элитные товары из Англии по низким ценам', date: '08.10.2022', imgSrc: 'blog-image7.png', time: '8 минут'},
        {id: 8, title: 'Forever 21 - покупаем джинсы за 1 500 рублей', date: '08.10.2022', imgSrc: 'blog-image8.png', time: '8 минут'},
        {id: 9, title: 'Как купить кроссовки Balenciaga на 30 000 рублей дешевле?', date: '08.10.2022', imgSrc: 'blog-image9.png', time: '8 минут'},
        {id: 10, title: 'Топ-7 самых дорогих сумо Louis Vuitton', date: '08.10.2022', imgSrc: 'blog-image10.png', time: '8 минут'},
        {id: 11, title: 'BH Cosmetics Galaxy. Галактика красоты и ухода', date: '08.10.2022', imgSrc: 'blog-image11.png', time: '8 минут'},
        {id: 12, title: '“Вансы”. Крутые кеды, которые не выйдут из моды никогда!', date: '08.10.2022', imgSrc: 'blog-image12.png', time: '8 минут'},
    ])

    return (
        <div className={styles.container}>
            <CardsList posts={posts} currentPage={1} limitPostsOnPage={12} />
        </div>
    )
}
