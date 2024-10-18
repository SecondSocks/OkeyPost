import { LargeField } from '../atoms/LargeField'
import styles from './WSLargeFields.module.scss'

export function WSLargeFields() {
    const contents = [
        {
            title: 'Сборка исходящей посылки вне очереди или экспресс сборка',
            description: 'Чтобы сэкономить время',
            price: '£5.00'
        },
        {
            title: 'Фото содержимого входящей посылки',
            description: '3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат',
            price: '£1.00 за 1 фото'
        },
        {
            title: 'Возврат вещей в магазин',
            description: 'В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"',
            price: '£10 + почтовые расходы'
        },
        {
            title: 'Проверка техники на работоспособность',
            description: 'Проверка электроники на включение/выключение (запрос через тикеты).',
            price: '£10'
        },
        {
            title: 'Удаление инвойса',
            description: 'Не предоставлять перечень товаров, услуг, количество, цену, формальные особенности товара, обработку, условия поставки.',
            price: 'Бесплатно'
        },
        {
            title: 'Дополнительная упаковка',
            description: 'Улучшение уровня защиты товара',
            price: 'По договоренности'
        }
    ]

    return (
        <div className={styles.container}>
            {contents.map(item => (
                <LargeField data={{
                    title: item.title,
                    description: item.description,
                    price: item.price
                }} key={item.title} />
            ))}
        </div>
    )
}
