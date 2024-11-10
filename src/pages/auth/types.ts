export interface IInput {
    legend: string
    type: string
    'Input': string
}

export interface ILogin {
    name: string
    email: string
    password: string
}

export interface IRegister {
    name: string
    surname: string
    email: string
}

export interface ISMS {
    sms: string
}

export interface IRecovery {
    email: string
}
