import { NavigateInfo } from '../atoms/NavigateInfo'
import { NavigateSide } from '../atoms/NavigateSide'
import styles from './BenefitNavigate.module.scss'

export function Navigate() {
    return (
        <div className={styles.container}>
            <NavigateSide data={{
                outfitSrc: "tshort.png",
                arrowSrc: "green-arrow.png",
                rotateDeg: 0,
                reverse: false
            }} />
            <NavigateInfo data={{
                deliveryTime: '10 дней',
                moneySaving: '$119.56'
            }} />
            <NavigateSide data={{
                outfitSrc: "jeans.png",
                arrowSrc: "green-arrow.png",
                rotateDeg: 180,
                reverse: true
            }} />
        </div>
    )
}
