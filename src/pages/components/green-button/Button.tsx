import styles from "./Button.module.scss"

interface Props {
    text: string
    width: number
    height: number
    func?: () => void
}

export function GreenButton({text, width, height, func}: Props) {
    return <button className={styles.button} style={{width: width, height: height}} onClick={func}>{text}</button>
}
