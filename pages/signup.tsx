import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { stack } from '../style/mixins'
import Button from '../components/Button'
import Input from '../components/Input'
import { Headline1 } from '../style/typography'
import Page from '../components/Page'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Link from '../components/Link'
import firebase from 'firebase'
import { useRouter } from 'next/dist/client/router'

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

const Signup: React.FC = () => {
    const AuthUser = useAuthUser()
    const router = useRouter()

    const signup = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            const { email, password } = event.target
            //TODO catch errors
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                router.push('/')
            } catch {}
        },
        [router]
    )

    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={signup}>
                <Headline1>SIGN UP</Headline1>
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
                    sign up
                </Button>
                <Link href="/login">already have an account?</Link>
            </Form>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser()(Signup)
