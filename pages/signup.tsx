import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import { stack } from '../lib/style/mixins'
import Button from '../lib/components/Button'
import Input from '../lib/components/Input'
import { Headline1 } from '../lib/style/typography'
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
            } catch {}
        },
        [router]
    )

    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={signup}>
                <Headline1>SIGN UP</Headline1>
                <Input placeholder="name" name="name" type="text" required />
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
