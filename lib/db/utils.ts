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

export const createBuild = async (data: Build): Promise<string> => {
    return await (
        await firebase.firestore().collection('builds').add(data)
    ).id
}

export const updateBuild = async (id: string, data: Build): Promise<void> => {
    await firebase
        .firestore()
        .collection('builders')
        .doc(id)
        .set(data, { merge: true }).
}
