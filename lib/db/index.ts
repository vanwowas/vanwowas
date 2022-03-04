import { getFirebaseAdmin } from 'next-firebase-auth'
import initAuth from '../firebase/initAuth'
import { Build, Builder, Place, User } from '../types/db'
import { Image } from '../types/db'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const geofire = require('geofire-common')

initAuth()
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

const getBuild = async (id: string): Promise<Build | undefined> => {
    const res = await dataPoint<Build>('builds').doc(id).get()
    const data = await res?.data()
    const buildId = res?.id
    if (data) {
        return { ...data, id: buildId }
    }
}

const getBuilds = async (place?: Place, price?: number): Promise<Build[]> => {
    const data: Build[] = []

    await (
        await dataPoint<Build>('builds')
            .where('price', '<=', price || 10000000)
            .get()
    ).forEach((build) => data.push({ ...build.data(), id: build.id }))
    if (place) {
        data.sort((a, b) => {
            const aDistance = geofire.distanceBetween(
                [a.lat, a.lon],
                [place.lat, place.lon]
            )
            const bDistance = geofire.distanceBetween(
                [b.lat, b.lon],
                [place.lat, place.lon]
            )

            return aDistance > bDistance ? 1 : -1
        })
    }
    return data
}

const getBuilderBuilds = async (builderId: string): Promise<Build[]> => {
    const data: Build[] = []
    await (
        await dataPoint<Build>('builds').where('userId', '==', builderId).get()
    ).forEach((build) => data.push({ ...build.data(), id: build.id }))
    return data
}

const getUserFavoriteBuilds = async (favorites: string[]): Promise<Build[]> => {
    const data: Build[] = []
    favorites.length &&
        (await (
            await dataPoint<Build>('builds').where('id', 'in', favorites).get()
        ).forEach((build) => data.push({ ...build.data(), id: build.id })))
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
        await dataPoint<Build>('builds').where('images', '!=', false).get()
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
    getBuilderBuilds,
    getBuilds,
    getImageSet,
    getUserFavoriteBuilds,
}

export { db }
export default db
