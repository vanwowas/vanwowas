import firebase from 'firebase'
import { Build, Builder, User } from '../types/db'

export const createUser = async (
    data: User & { email: string; password: string }
): Promise<void> => {
    const { email, password, ...userData } = data

    const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

    await firebase
        .firestore()
        .collection('users')
        .doc(user.user?.uid)
        .set(userData)
}

export const updateUser = async (id: string, data: User): Promise<void> => {
    await firebase
        .firestore()
        .collection('users')
        .doc(id)
        .set(data, { merge: true })
}

export const addFavorite = async (
    id: string,
    favorite: string
): Promise<void> => {
    await firebase
        .firestore()
        .collection('users')
        .doc(id)
        .update('favorites', firebase.firestore.FieldValue.arrayUnion(favorite))
}

export const createBuilder = async (
    id: string,
    data: Builder
): Promise<void> => {
    await firebase
        .firestore()
        .collection('builders')
        .doc(id)
        .set(data, { merge: true })
}

export const updateBuild = async (data: Partial<Build>): Promise<string> => {
    const doc = await firebase.firestore().collection('builds').doc(data.id)
    const updatedFields = JSON.parse(JSON.stringify(data)) as Partial<Build>
    await doc.set(updatedFields, { merge: true })
    return doc.id
}
