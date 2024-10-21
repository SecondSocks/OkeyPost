import { SmallField } from '../atoms/SmallField'
import styles from './AdditionallyContent.module.scss'

export function AdditionallyContent() {
    return (
        <div className={styles.container}>
           <h2>Дополнительная упаковка</h2>
           <div className={styles.positions}>
                <SmallField data={{
                        title: 'Многослойная пленка',
                        description: 'Дополнительная защита покупок',
                        price: '£3.99'
                }}/>
                <SmallField data={{
                        title: 'Упаковка в пакет',
                        description: 'Надежно защищает от влаги',
                        price: '£1.99'
                }}/>
                <SmallField data={{
                        title: 'Упаковка в коробку с двойными стенками',
                        description: 'Надежно защищает от влаги',
                        price: '£4.99'
                }}/>
                <SmallField data={{
                        title: 'Наклейка “Обращаться с осторожностью”',
                        description: 'Дополнительная защита покупок',
                        price: '£0.25'
                }}/>
                <SmallField data={{
                        title: 'Наклейка “Хрупкий груз”',
                        description: 'Дополнительная защита покупок',
                        price: '£0.25'
                }}/>
           </div>

        </div>
    )
}
