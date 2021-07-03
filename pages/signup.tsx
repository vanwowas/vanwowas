import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { stack } from '../style/mixins'
import Button from '../components/Button'
import Input from '../components/Input'
import Page from '../components/Page'
import { Headline1 } from '../style/typography'
import { useAuth } from '../context/AuthContext'
import useAuthenticatedRoute from '../hooks/useAuthenticatedRoute'

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
    const { signUpWithEmail, loading } = useAuth()
    useAuthenticatedRoute('/')

    const login = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            const { email, password } = event.target
            //TODO catch errors
            await signUpWithEmail(email.value, password.value)
        },
        [signUpWithEmail]
    )

    return (
        <Page>
            <Form onSubmit={login}>
                <Headline1>SIGN UP</Headline1>
                <Input placeholder="email" name="email" type="email" required />
                <Input
                    placeholder="password"
                    name="password"
                    type="password"
                    required
                />
                <Button
                    disabled={loading}
                    type="submit"
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="dark"
                >
                    sign up
                </Button>
            </Form>
        </Page>
    )
}

export default Signup
