import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button from '../lib/components/Button'
import Input from '../lib/components/Input'
import { Headline1, Paragraph } from '../lib/style/typography'
import Page from '../lib/components/Page'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Link from '../lib/components/Link'
import { useRouter } from 'next/dist/client/router'
import { createUser } from '../lib/db/utils'

interface HTMLFormEvent extends FormEvent<HTMLFormElement> {
    target: EventTarget & {
        name: {
            value: string
        }
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
            const { email, password, name } = event.target
            //TODO catch errors
            try {
                await createUser({
                    email: email.value,
                    password: password.value,
                    name: name.value,
                    isBuilder: false,
                })

                router.push('/user')
            } catch (e) {
                console.log(e)
            }
        },
        [router]
    )

    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={signup}>
                <Headline1>Account erstellen</Headline1>
                <Paragraph>
                    Später kannst Du dein Profil zu einer Manufaktur erweitern
                </Paragraph>
                <Input placeholder="Name" name="name" type="text" required />
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
                    registrieren
                </Button>
                <Link href="/login">Du hast schon einen Account?</Link>
            </Form>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser()(Signup)
