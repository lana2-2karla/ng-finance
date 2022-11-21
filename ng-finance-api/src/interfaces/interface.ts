
export interface Ilogin {
  username: string
  password: string
}

export interface IuserCreated {
  id: string
  username: string
  password: string
}

export interface IPayloadId {
  id: string
}

export interface ITransactionCreated {
  username: string
  value: number
}
