import styles from './MiddleBanner.module.scss'
import { IMiddleBanner } from '../types'
import { Button } from '../green-button/Button'

interface Props {
    data: IMiddleBanner
}

export function MiddleBanner({data}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={data.imgSrc} alt="Logo" />
                <div className={styles.rightSide}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <Button text={"Попробовать"} width={240} height={66} />
                </div>
            </div>
        </div>
    )
}
