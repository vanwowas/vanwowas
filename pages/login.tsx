import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button from '../lib/components/Button'
import Input from '../lib/components/Input'
import { BodyM, Headline1 } from '../lib/style/typography'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Firebase from '../lib/firebase'
import Page from '../lib/components/Page'
// import { useRouter } from 'next/dist/client/router'
import Link from '../lib/components/Link'
import LoadingContainer from '../lib/components/LoadingContainer'
import colors from '../lib/style/colors'

interface HTMLFormEvent extends FormEvent<HTMLFormElement> {
    target: EventTarget & {
        email: {
            value: string
        }
        password: {
            value: string
        }
    }
}

const Form = styled.form`
    ${stack('16px', 'y')}
    max-width: 600px;
    margin: auto;
    color: ${colors.dark};
`
const Error = styled(BodyM)`
    color: ${colors.warn};
`

export type AuthError = {
    code: 'auth/wrong-password' | 'auth/user-not-found'
}

const Login: React.FC = () => {
    const AuthUser = useAuthUser()
    // const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()
    // if (router.route === '/login' && AuthUser.id) {
    //     router.push('/user')
    // }

    const login = useCallback(async (event: HTMLFormEvent) => {
        setLoading(true)
        event.preventDefault()
        const { email, password } = event.target
        //TODO catch errors
        try {
            if (Firebase.auth) {
                await Firebase.auth().signInWithEmailAndPassword(
                    email.value,
                    password.value
                )
                // await router.push('/user')
                setLoading(false)
            }
        } catch (error) {
            const { code } = error as AuthError
            if (code === 'auth/wrong-password') {
                setError('Falsches Passwort')
            } else if (code === 'auth/user-not-found') {
                setError('Email-Adresse noch nicht registriert')
            }
            setLoading(false)
        }
    }, [])

    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Login"
            description="Anmelden,Registrierung, Signup, Login, Account, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <LoadingContainer loading={loading}>
                <Form onSubmit={login}>
                    <Headline1>LOGIN</Headline1>
                    <Input
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                        required
                    />
                    <Input
                        placeholder="Passwort"
                        name="password"
                        type="password"
                        required
                    />
                    <Error>{error}</Error>
                    <Button
                        disabled={false}
                        type="submit"
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="dark"
                    >
                        login
                    </Button>
                    <Link href="/signup">Noch keinen Account?</Link>
                    <Link href="/reset">Passwort vergessen?</Link>
                </Form>
            </LoadingContainer>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Login)
