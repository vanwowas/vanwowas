import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { stack } from '../style/mixins'
import Button from '../components/Button'
import Input from '../components/Input'
import { Headline1 } from '../style/typography'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Firebase from '../firebase'
import Page from '../components/Page'
import { useRouter } from 'next/dist/client/router'
import Link from '../components/Link'

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

    const login = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            const { email, password } = event.target
            //TODO catch errors
            try {
                if (Firebase.auth) {
                    await Firebase.auth().signInWithEmailAndPassword(
                        email.value,
                        password.value
                    )
                    router.push('/')
                }
            } catch (error) {
                return new Error('something went wrong 🔥')
            }
        },
        [router]
    )

    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={login}>
                <Headline1>LOGIN</Headline1>
                <Input placeholder="email" name="email" type="email" required />
                <Input
                    placeholder="password"
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
                <Link href="/reset">forgot your password?</Link>
            </Form>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser()(Login)
