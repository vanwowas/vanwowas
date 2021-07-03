import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import Firebase from '../firebase'
import { User } from '@firebase/auth-types'

export type Auth = {
    user: User | null
    loading: boolean
    signUpWithEmail: (
        email: string,
        password: string
    ) => Promise<Error | undefined>
    signInWithEmail: (
        email: string,
        password: string
    ) => Promise<Error | undefined>
}

const AuthContext = createContext<Auth>({
    user: null,
    loading: true,
    signUpWithEmail: () => Promise.resolve(undefined),
    signInWithEmail: () => Promise.resolve(undefined),
})

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<Auth['user']>(null)
    const [loading, setLoading] = useState<Auth['loading']>(false)

    const authStateChanged = useCallback((authUser: Auth['user']) => {
        if (!authUser) {
            setUser(null)
            setLoading(false)
            return
        }
        setLoading(true)
        setUser(authUser)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (Firebase.auth) {
            const unsubscribe =
                Firebase.auth().onAuthStateChanged(authStateChanged)
            return () => unsubscribe()
        }
    }, [authStateChanged])

    const signUpWithEmail = useCallback(
        async (email: string, password: string) => {
            try {
                if (Firebase.auth) {
                    setLoading(true)
                    await Firebase.auth().createUserWithEmailAndPassword(
                        email,
                        password
                    )
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                return new Error('something went wrong 🔥')
            }
        },
        []
    )

    const signInWithEmail = useCallback(
        async (email: string, password: string) => {
            try {
                if (Firebase.auth) {
                    setLoading(true)
                    await Firebase.auth().signInWithEmailAndPassword(
                        email,
                        password
                    )
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                return new Error('something went wrong 🔥')
            }
        },
        []
    )

    return (
        <AuthContext.Provider
            value={{ loading, user, signUpWithEmail, signInWithEmail }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth: () => Auth = () => useContext(AuthContext)
