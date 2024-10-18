import { GreenButton } from "../../components/green-button/Button"
import styles from "./TopBannerLeftSide.module.scss"

export function BannerLeftSide() {
    return (
        <div className={styles.container}>
            <h1>Доставка товаров из Великобритании в Россию</h1>
            <p>
                Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупатьскидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
            </p>
            <GreenButton text={"Получить адрес в РФ"} width={260} height={66} />
        </div>
    )
}
