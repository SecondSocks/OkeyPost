import { INavigateSide } from '../types'
import styles from './NavigateSide.module.scss'

interface Props {
    data: INavigateSide
}

export function NavigateSide({data}: Props) {
    const rotateDeg = {
        transform: `rotate(${data.rotateDeg}deg)`
    }

    const reversing = {
        flexDirection: "row-reverse"
    }

    return (
        <div className={styles.container} style={data.reverse ? reversing : null}>
            <img src={data.outfitSrc} alt="Outfit" />
            <img src={data.arrowSrc} alt="Green Arrow" style={rotateDeg}/>
        </div>
    )
}
