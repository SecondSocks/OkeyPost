import { Button } from '../green-button/Button'
import { ITopBanner } from '../types'
import styles from './Banner.module.scss'

interface Props {
    data: ITopBanner
}

export function TopBanner({data}: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>Главная / {data.pageName}</p>
                <h1>{data.title}</h1>
                {data.description ? <h2>{data.description}</h2> : null}
                {data.button ? <Button text={'Получить адрес в UK'} width={260} height={66} /> : null}
            </div>
        </div>
    )
}
