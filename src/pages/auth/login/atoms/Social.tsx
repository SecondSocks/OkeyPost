import styles from './Social.module.scss'

export function Social() {
    return (
        <div className={styles.container}>
            <a href="google.com">
                <img src="google-icon.png" alt="Google" />
            </a>
            <a href="facebook.com">
                <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="vk.ru">
                <img src="vk-icon.png" alt="VK" />
            </a>
        </div>
    )
}
