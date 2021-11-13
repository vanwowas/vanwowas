export type Builder = {
    description: string
    zip: string
    phone?: string
    images?: Image[]
}

export type GeneralInfos = {
    description: string
    zip: string
    phone?: string
}

export type Build = {
    id: string
    title: string
    description: string
    price: string
    images: Image[] | null
    userId: string
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type User = {
    name: string
    isBuilder: boolean
}

export type Builds = FirebaseFirestore.QueryDocumentSnapshot<Build>[]

export type Image = {
    url: string
    description: string | null
}
