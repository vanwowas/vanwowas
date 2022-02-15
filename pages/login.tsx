import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button from '../lib/components/Button'
import Input from '../lib/components/Input'
import { Headline1 } from '../lib/style/typography'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Firebase from '../lib/firebase'
import Page from '../lib/components/Page'
import { useRouter } from 'next/dist/client/router'
import Link from '../lib/components/Link'
import LoadingContainer from '../lib/components/LoadingContainer'

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
    padding: 1rem;
    margin: auto;
`

const Login: React.FC = () => {
    const AuthUser = useAuthUser()
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    if (router.route === '/login' && AuthUser.id) {
        router.push('/user')
    }

    const login = useCallback(
        async (event: HTMLFormEvent) => {
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
                    await router.push('/user')
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                return new Error('something went wrong 🔥')
            }
        },
        [router]
    )

    return (
        <Page user={AuthUser} withPadding>
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

export default withAuthUser()(Login)
