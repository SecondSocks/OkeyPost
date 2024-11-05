export interface IData {
    country: string
    city: string
    index: number
    weight: string
    services: string
}

export interface IBannerForm {
    email: string
}

export interface IProductSide {
    title: string
    src: string
    price: string
    cost: string
}

export interface IProductRightSide extends IProductSide {
    anotherColor: string
}

export interface INavigateSide {
    outfitSrc: string
    arrowSrc: string
    rotateDeg: number
    reverse: boolean
}

export interface INavigateInfo {
    deliveryTime: string
    moneySaving: string
}

export interface IDeliveryOptionPoint {
    logoSrc: string
    deliveryMehtod: string
    deadline: string
    cost: string
    result: string
}

export interface IBritainShoppingCard {
    src: string
    title: string
    description: string
}

export interface IRatingCard {
    imgSrc: string
    title: string
    description: string
}

export interface IReviewCard {
    imgSrc: string
    name: string
    rating: number
    comment: string
    date: string
    city: string
}
