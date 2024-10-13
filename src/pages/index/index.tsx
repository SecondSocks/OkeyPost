import styles from "./index.module.scss"
import { Header } from "../components/header/header"
import { Banner } from "./blocks/TopBanner"
import { Benefit } from "./blocks/Benefit"
import { Form } from "./blocks/Form"
import { DeliveryOption } from "./blocks/DeliveryOption"
import { BritainShoping } from "./blocks/BritainShopping"
import { MiddleBanner } from "../components/middle-banner/MiddleBanner"
import { Rating } from "./blocks/Rating"
import { InfoBlock } from "./blocks/InfoBlock"
import { BottomBanner } from "./blocks/BottomBanner"
import { Footer } from "../components/footer/Footer"

export function Index() {
    return (
        <div className={styles.index}>
            <div className={styles.container}>
               <Header />
               <Banner />
               <Benefit />
               <MiddleBanner data={{
                    imgSrc: "index-banner2.png",
                    title: 'Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.',
                    description: "Такой способ покупки также подойдёт, если магазин принимает только английские карты."
               }}/>
               <Form />
               <DeliveryOption />
               <BritainShoping />
               <MiddleBanner data={{
                    imgSrc: "index-banner3.png",
                    title: 'Виртуальный тур по нашему складу в реальном времени',
                    description: "Вы можете всегда посмотреть на нашу слаженую работу на складе"
               }}/>
               <Rating />
               <InfoBlock />
               <BottomBanner />
               <Footer />
            </div>
        </div>
    )
}
