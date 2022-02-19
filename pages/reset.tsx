import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button, { LinkButton } from '../lib/components/Button'
import Input from '../lib/components/Input'
import { BodyM, Headline1 } from '../lib/style/typography'
import Page from '../lib/components/Page'
import firebase from 'firebase/app'

import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { AuthError } from './login'
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
    margin: auto;
`

const Reset: React.FC = () => {
    const AuthUser = useAuthUser()
    const [finished, setFinished] = useState(false)
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)
    const handleSubmit = useCallback(async (event: HTMLFormEvent) => {
        event.preventDefault()
        setLoading(true)
        const { email } = event.target
        try {
            await firebase.auth().sendPasswordResetEmail(email.value)
            setFinished(true)
        } catch (error) {
            const { code } = error as AuthError
            if (code === 'auth/user-not-found') {
                setError('Unbekannte E-Mail Adresse')
                setLoading(false)
            }
        }
    }, [])

    return (
        <Page
            user={AuthUser}
            withPadding
            title="VanWoWas - Passwort zurücksetzen"
            description="Passwort zurücksetzen,Registrierung, Signup, Login, Account, Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            <LoadingContainer loading={loading}>
                <Form onSubmit={handleSubmit}>
                    {!finished ? (
                        <>
                            <Headline1>
                                Gib deine E-Mail ein, um dein Passwort
                                zurückzusetzen
                            </Headline1>
                            <Input
                                placeholder="E-Mail"
                                name="email"
                                type="email"
                                required
                            />
                            {error && <BodyM color="warn">{error}</BodyM>}
                            <Button
                                disabled={false}
                                type="submit"
                                backgroundColor="secondary"
                                borderColor="dark"
                                color="dark"
                            >
                                zurücksetzen
                            </Button>
                        </>
                    ) : (
                        <>
                            <Headline1>
                                We send you an email to reset your password ;)
                            </Headline1>
                            <div style={{ marginTop: '4rem' }}>
                                <LinkButton
                                    backgroundColor="secondary"
                                    borderColor="dark"
                                    color="dark"
                                    href="/login"
                                >
                                    go to login
                                </LinkButton>
                            </div>
                        </>
                    )}
                </Form>
            </LoadingContainer>
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser()(Reset)
