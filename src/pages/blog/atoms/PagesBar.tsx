import styles from './PagesBar.module.scss'

export function PagesBar() {
    return (
        <div className={styles.container}>
            <div>
                <input type="radio" id="radio" name="radio" />
                <label htmlFor="radio">Radio</label>
            </div>
            <div>
                <input type="radio" id="radio1" name="radio" />
                <label htmlFor="radio1">Radio 1</label>
            </div>
        </div>
    )
}
