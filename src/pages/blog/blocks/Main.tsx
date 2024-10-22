import { Card } from '../atoms/Card'
import type { ICard } from '../types'
import styles from './Main.module.scss'

export function Main() {
    const contents: ICard[] = [
        {
            imgSrc: 'blog-image1.png',
            title: 'Интернет-магазин Urban Outfitters в UK: обзор',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image2.png',
            title: 'Overstock. Брендовые товары по доступным ценам',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image3.png',
            title: 'Skechers с Amazon. Удобная обувь для всей семьи',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image4.png',
            title: '16 лучших подарков с Амазона в 2021 году',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image5.png',
            title: 'Target — семейный супермаркет с ценами от 300 рублей!',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image6.png',
            title: 'Английский магазин RIPNDIP. Покупаем самовыражение',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image7.png',
            title: 'Nautica. Элитные товары из Англии по низким ценам',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image8.png',
            title: 'Forever 21 - покупаем джинсы за 1 500 рублей',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image9.png',
            title: 'Как купить кроссовки Balenciaga на 30 000 рублей дешевле?',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image10.png',
            title: 'Топ-7 самых дорогих сумо Louis Vuitton',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image11.png',
            title: 'BH Cosmetics Galaxy. Галактика красоты и ухода ',
            date: '22.10.2021',
            time: '8 минут'
        },
        {
            imgSrc: 'blog-image12.png',
            title: '“Вансы”. Крутые кеды, которые не выйдут из моды никогда!',
            date: '22.10.2021',
            time: '8 минут'
        },
    ]

    return (
        <div className={styles.container}>
            {contents.map(item => (
                <a href={item.link} key={item.date}>
                    <Card data={{
                        imgSrc: item.imgSrc,
                        title: item.title,
                        date: item.date,
                        time: item.time
                    }} />
                </a>
            ))}
        </div>
    )
}
