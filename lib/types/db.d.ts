export type Builder = {
    description: string
    email: string
    zip: string
    phone?: string
    name: string
    website?: string
    headerImage?: string
}

export type GeneralInfos = {
    description: string
    zip: string
    phone?: string
}

export type Build = {
    id: string
    title: string
    model: string
    description: string
    price: number
    images: Image[] | null
    userId: string
    geohash: string
    lat: number
    lon: number
}

export type Place = {
    zipCode: string
    name: string
    lat: number
    lon: number
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type User = {
    name: string
    isBuilder: boolean
    verified?: boolean
    favorites?: string[]
}

export type Builds = FirebaseFirestore.QueryDocumentSnapshot<Build>[]

export type Image = {
    url: string
    description: string | null
    mainImage: boolean
}
