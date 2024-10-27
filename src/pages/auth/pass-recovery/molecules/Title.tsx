import styles from './Title.module.scss'

export function Title() {
    return (
         <div className={styles.container}>
            <h3>Восстановление пароля</h3>
            <p>Введите Email, с которым вы зарегистрированы на сайте, и нажмите <b>«Восстановить»</b></p>
         </div>
    )
}
