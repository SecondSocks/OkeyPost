import { Contacts } from '../atoms/Contacts'
import { TextBlock } from '../atoms/TextBlock'
import styles from './InfoBlock.module.scss'

export function InfoBlock() {
    const company = [
        'Услуги', 'Цены', 'Отзывы', 'Контакты', 'Вакансии',
        'Соглашение о персональных данных', 'Условия пользования'
    ]
    const useful = [
        'Как работает наш сервис', 'Как покупать с оператором',
        'Ответы на частые вопросы', 'Популярные магазины',
        'Черный список магазинов', 'Акутальные распродажи'
    ]
    const special = [
        '50% на первую доставку', 'Скидки для постоянных клиентов',
        'Реферальная программа', 'Кэшбек Mr. Rebates и Rakuten',
        'Stop Fraud'
    ]

    return (
        <div className={styles.container}>
            <Contacts />
            <TextBlock data={{
                title: 'О компании',
                elements: company
            }} />
            <TextBlock data={{
                title: 'Полезное',
                elements: useful
            }} />
            <TextBlock data={{
                title: 'Спецпроекты',
                elements: special
            }} />
        </div>
    )
}
