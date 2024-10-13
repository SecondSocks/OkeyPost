import { ITextBlock } from '../types'
import styles from './TextBlock.module.scss'

interface Props {
    data: ITextBlock
}

export function TextBlock({data}: Props) {
    return (
        <div className={styles.container}>
           <h5>{data.title}</h5>
           {data.elements.map(item => (
                <a href='#' key={item}>
                    <p key={item}>{item}</p>
                </a>
           ))}
        </div>
    )
}
