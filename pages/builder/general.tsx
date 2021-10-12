import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Page from '../../components/Page'
import TextArea from '../../components/TextArea'
import colors from '../../style/colors'
import { stack } from '../../style/mixins'
import { Headline1 } from '../../style/typography'

interface HTMLFormEvent extends FormEvent<HTMLFormElement> {
    target: EventTarget & {
        name: {
            value: string
        }
        about: {
            value: string
        }
        zip: {
            value: string
        }
        phone: {
            value: string
        }
    }
}

const Form = styled.form`
    ${stack('2rem', 'y')};
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
    ${TextArea} {
        resize: none;
    }
`

const General: React.FC = () => {
    const AuthUser = useAuthUser()
    const router = useRouter()

    const submit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            // const { name, about, zip, phone } = event.target
            router.push('/builder/builds')
        },
        [router]
    )
    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={submit}>
                <Headline1>Name</Headline1>
                <Input
                    type="text"
                    defaultValue={AuthUser.displayName ?? ''}
                    placeholder="Dein Name"
                />
                <Headline1>Über dich</Headline1>
                <TextArea
                    placeholder="Beschreibe deine Manufaktur ein bisschen..."
                    rows={5}
                />
                <Headline1>Wo baust du aus?</Headline1>
                <Input
                    placeholder="PLZ"
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    minLength={5}
                    pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                />
                <Headline1>Telefon</Headline1>
                <Input
                    placeholder="Telefonnummer"
                    type="text"
                    inputMode="numeric"
                />
                <div>
                    <Button
                        type="submit"
                        disabled={false}
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="dark"
                    >
                        weiter
                    </Button>
                </div>
            </Form>
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(General)
