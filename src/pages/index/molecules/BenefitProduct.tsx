import { ProductLeftSide } from '../atoms/ProductLeftSide'
import { ProductRightSide } from '../atoms/ProductRightSide'
import styles from './BenefitProduct.module.scss'

export function Product() {
    return (
        <div className={styles.container}>
            <ProductLeftSide data={{
                title: 'Columbia Barlow Pass 550 Turbodown Jacket',
                src: 'russia-flag.png',
                price: 'Цена в России',
                cost: '7891,46₽'
            }} />
            <img src="jacket.png" alt="Columbia Barlow Pass 550 Turbodown Jacket" />
            <ProductRightSide data={{
                title: 'Доставка одежды из Великобритании  от',
                src: 'britain-flag.png',
                price: 'Цена в UK',
                cost: '£80.62',
                anotherColor: '£7.79'
            }} />
        </div>
    )
}
