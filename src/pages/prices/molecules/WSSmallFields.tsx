import { SmallField } from '../atoms/SmallField'
import styles from './WSSmallFields.module.scss'

export function WSSmallFields() {
    const content = [
        ['Консолидация', '£1.00/1 трек'], ['Дополнительная упаковка', '£5.00'],
        ['Заполнение декларации', '£1.00'], ['Упаковка xрупкиx предметов', '£10.00'],
        ['Заполнение декларации', '£1.00'], ['Разделение заказа', '£2.00']
]

    return (
        <div className={styles.container}>
            {content.map(item => (
                <SmallField data={{
                    title: item[0],
                    price: item[1]
                }} key={item[0]} />
            ))}
        </div>
    )
}
