import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button from '../lib/components/Button'
import Input from '../lib/components/Input'
import { Headline1, BodyM } from '../lib/style/typography'
import Page from '../lib/components/Page'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Link from '../lib/components/Link'
import { createUser } from '../lib/db/utils'
import LoadingContainer from '../lib/components/LoadingContainer'

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
    ${stack('1rem', 'y')}
    max-width: 600px;
    margin: auto;
`

const Signup: React.FC = () => {
    const AuthUser = useAuthUser()
    const [loading, setLoading] = useState(false)

    const signup = useCallback(async (event: HTMLFormEvent) => {
        event.preventDefault()
        setLoading(true)

        const { email, password, name } = event.target
        try {
            await createUser({
                email: email.value,
                password: password.value,
                name: name.value,
                isBuilder: false,
            })

            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }, [])

    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Registrierung"
            description="Registrierung, Signup, Login, Account, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <LoadingContainer loading={loading}>
                <Form onSubmit={signup}>
                    <Headline1>Account erstellen</Headline1>
                    <BodyM>
                        Später kannst Du dein Profil zu einer Manufaktur
                        erweitern
                    </BodyM>
                    <Input
                        placeholder="Name"
                        name="name"
                        type="text"
                        required
                    />
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
            </LoadingContainer>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Signup)
