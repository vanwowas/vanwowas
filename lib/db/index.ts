import { getFirebaseAdmin } from 'next-firebase-auth'
import { Build, Builder } from '../types/db'

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
    return await (await dataPoint<Build>('builds').doc(id).get()).data()
}

const db = {
    builds: dataPoint<Build>('builds'),
    builders: dataPoint<Builder>('builders'),
    getUser,
    getBuilder,
    getBuild,
}

export { db }
export default db
