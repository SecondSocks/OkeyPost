import styles from "./Button.module.scss"

interface Props {
    text: string
    width: number
    height: number
}

export function Button({text, width, height}: Props) {
    return <button className={styles.button} style={{width: width, height: height}}>{text}</button>
}
