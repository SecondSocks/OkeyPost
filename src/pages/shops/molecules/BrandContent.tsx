import { Card } from '../atoms/Card'
import styles from './BrandContent.module.scss'

type TBrands = {
    id: number
    imgSrc: string
    title: string
}

export function BrandContent() {
    const brands: TBrands[] = [
        {id: 1, imgSrc: 'primark.png', title: 'Primark'},
        {id: 2, imgSrc: 'h&m.png', title: 'H&M'},
        {id: 3, imgSrc: 'mangooutlet.png', title: 'Mangooutlet'},
        {id: 4, imgSrc: 'next.png', title: 'Next'},
        {id: 5, imgSrc: 'sportdirect.png', title: 'Sportdirect'},
        {id: 6, imgSrc: 'f&f.png', title: 'Clothing at Tesco'},
        {id: 7, imgSrc: 'georgeASDA.png', title: 'George at ASDA'},
        {id: 8, imgSrc: 'accessorize.png', title: 'Accessorize'},
        {id: 9, imgSrc: 'addidas.png', title: 'Addidas UK'},
        {id: 10, imgSrc: 'amazon.png', title: 'Amazon'},
        {id: 11, imgSrc: 'asos.png', title: 'ASOS'},
        {id: 12, imgSrc: 'boohoo.png', title: 'Boohoo'},
        {id: 13, imgSrc: 'crocs.png', title: 'Crocs'},
        {id: 14, imgSrc: 'ebay.png', title: 'Ebay'},
        {id: 15, imgSrc: 'matalan.png', title: 'Matalan'},
        {id: 16, imgSrc: 'mothercare.png', title: 'Mothercare'},
        {id: 17, imgSrc: 'newlook.png', title: 'New Look'},
        {id: 18, imgSrc: 'puma.png', title: 'Puma'},
        {id: 19, imgSrc: 'timberland.png', title: 'Timberland'},
        {id: 20, imgSrc: 'showroomprive.png', title: 'Showroomprive'},
        {id: 21, imgSrc: 'brandalley.png', title: 'Brand Alley'},
        {id: 22, imgSrc: 'm&s.png', title: 'M&S'},
        {id: 23, imgSrc: 'clarks.png', title: 'Clarks'},
        {id: 24, imgSrc: 'zara.png', title: 'Zara'},
        {id: 25, imgSrc: 'mango.png', title: 'Mango'},
        {id: 26, imgSrc: 'zulily.png', title: 'Zulily'},
        {id: 27, imgSrc: 'panachekids.png', title: 'Panachekids'},
        {id: 28, imgSrc: 'betterware.png', title: 'Betterware'},
        {id: 29, imgSrc: 'tucci.png', title: 'Tucci Store'},
        {id: 30, imgSrc: 'minimode.png', title: 'Mini Mode'},
    ]

    return (
        <div className={styles.container}>
            {brands.map(item => (
                <Card data={{
                    imgSrc: item.imgSrc,
                    title: item.title
                }} key={item.id} />
            ))}
        </div>
    )
}
