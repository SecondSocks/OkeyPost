import { QuestionField } from '../atoms/QuestionField'
import type { ITheme } from '../types'
import styles from './Theme.module.scss'

interface Props {
    data: ITheme
}

export function Theme({data}: Props) {
    return (
        <div className={styles.container}>
           <h2>{data.title}</h2>
           {data.questions.map(item => (
                <QuestionField title={item} key={item} />
           ))}
        </div>
    )
}
