import styles from "./Button.module.scss"

interface Props {
    text: string
    width: number
    height: number
    func?: () => void
    type?: string
}

export function GreenButton({text, width, height, func, type}: Props) {
    return (
			<button
				className={styles.button}
				style={{ width: width, height: height }}
				onClick={func}
				type={type}
            >
				{text}
			</button>
		)
}
