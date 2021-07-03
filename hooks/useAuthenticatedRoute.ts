import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const useAuthenticatedRoute: (redirect: string) => void = (redirect) => {
    const router = useRouter()
    const { user } = useAuth()

    useEffect(() => {
        if (user) {
            router.push(redirect)
        }
    }, [redirect, router, user])
}

export default useAuthenticatedRoute
