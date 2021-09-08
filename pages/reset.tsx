import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { stack } from '../style/mixins'
import Button, { LinkButton } from '../components/Button'
import Input from '../components/Input'
import { Headline1 } from '../style/typography'
import Page from '../components/Page'
import firebase from 'firebase/app'

import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

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

const Reset: React.FC = () => {
    const AuthUser = useAuthUser()
    const [finished, setFinished] = useState(true)
    const handleSubmit = useCallback(async (event: HTMLFormEvent) => {
        event.preventDefault()
        const { email } = event.target
        try {
            await firebase.auth().sendPasswordResetEmail(email.value)
            setFinished(true)
        } catch {
            //TODO catch error
        }
    }, [])

    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={handleSubmit}>
                {!finished ? (
                    <>
                        <Headline1>
                            Enter your E-Mail to reset the password
                        </Headline1>
                        <Input
                            placeholder="email"
                            name="email"
                            type="email"
                            required
                        />
                        <Button
                            disabled={false}
                            type="submit"
                            backgroundColor="secondary"
                            borderColor="dark"
                            color="dark"
                        >
                            reset
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
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenAuthed: AuthAction.REDIRECT_TO_APP,
})()

export default withAuthUser()(Reset)
