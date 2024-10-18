import styles from './Button.module.scss'

interface Props {
    text: string
}

export function BlueButton({text}: Props) {
    return (
        <button className={styles.button}>{text}</button>
    )
}
