export interface IStepProps {
    title: string
    cardNumber: string
    description: string
}

export interface ICard extends IStepProps {
    imgSrc: string
}
