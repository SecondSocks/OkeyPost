import styles from './QuestionField.module.scss'

interface Props {
    title: string
}

export function QuestionField({title}: Props) {
    return (
        <div className={styles.container}>
           <h3>{title}</h3>
           <button>
                <img src="unfolding-arrow.png" alt="Unfolding Arrow" />
           </button>
        </div>
    )
}
