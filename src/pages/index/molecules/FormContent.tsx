import { Button } from '../../components/green-button/Button'
import { BottomFormContent } from '../atoms/BottomFormContent'
import { TopFormContent } from '../atoms/TopFormContent'
import styles from './FormContent.module.scss'

export function FormContent() {
    return (
        <div className={styles.container}>
           <TopFormContent />
           <BottomFormContent />
           <Button text={"Рассчитать"} width={240} height={66} />
        </div>
    )
}
