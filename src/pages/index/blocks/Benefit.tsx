import { Advantages } from '../molecules/BenefitAdvantages'
import { Categories } from '../molecules/BenefitCategories'
import { Navigate } from '../molecules/BenefitNavigate'
import { Product } from '../molecules/BenefitProduct'
import styles from './Benefit.module.scss'

export function Benefit() {
    return (
        <div className={styles.container}>
            <h2>Насколько выгодно покупать?</h2>
            <Categories />
            <Product />
            <Navigate />
            <Advantages />
        </div>
    )
}
