import { getFirebaseAdmin } from 'next-firebase-auth'
import { Build, Builder, User } from '../types/db'
import { Image } from '../types/db'
const converter = <T>() => ({
    toFirestore: (data: Partial<T>) => data,
    fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
        snap.data() as T,
})

const dataPoint = <T>(collectionPath: string) =>
    getFirebaseAdmin()
        .firestore()
        .collection(collectionPath)
        .withConverter(converter<T>())

const getUser = async (id: string): Promise<User | undefined> => {
    const user = await dataPoint<User>('users').doc(id).get()
    return user.data()
}

const getBuilder = async (id: string): Promise<Builder | undefined> => {
    const builder = await dataPoint<Builder>('builders').doc(id).get()
    return builder.data()
}

const getBuild = async (id?: string | string[]): Promise<Build | undefined> => {
    if (typeof id === 'string') {
        const res = await dataPoint<Build>('builds').doc(id).get()
        const data = await res?.data()
        const buildId = res?.id
        if (data && id) {
            return { ...data, id: buildId }
        }
    }
}

const getBuilds = async (): Promise<Build[]> => {
    const data: Build[] = []
    await (
        await dataPoint<Build>('builds').get()
    ).forEach((build) => data.push({ ...build.data(), id: build.id }))
    return data
}

const getUserBuilds = async (id: string): Promise<Build[]> => {
    const data: Build[] = []
    await (
        await dataPoint<Build>('builds').where('userId', '==', id).get()
    ).forEach((build) => data.push({ ...build.data(), id: build.id }))
    return data
}

const getImageSet = async (): Promise<Image[]> => {
    const data: Image[] = []
    await (
        await dataPoint<Build>('builds')
            .where('images', '!=', false)
            .limit(7)
            .get()
    ).forEach((build) => {
        const images = build.data().images
        if (images) {
            data.push(...images)
        }
    })

    return data
}
const db = {
    userBuilds: getUserBuilds,
    builders: dataPoint<Builder>('builders'),
    getUser,
    getBuilder,
    getBuild,
    getBuilds,
    getImageSet,
}

export { db }
export default db
