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
    title: string
    description: string
    price: string
    images?: Image[]
    userId: string
    zip: string
}

export type Builds = FirebaseFirestore.QueryDocumentSnapshot<Build>[]

export type Image = {
    url: string
    description?: string
}
