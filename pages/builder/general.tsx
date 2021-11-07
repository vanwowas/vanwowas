import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../lib/components/Button'
import Input from '../../lib/components/Input'
import Page from '../../lib/components/Page'
import TextArea from '../../lib/components/TextArea'
import db from '../../lib/db'
import { createBuilder, updateUser } from '../../lib/db/utils'
import colors from '../../lib/style/colors'
import { stack } from '../../lib/style/mixins'
import { Headline1 } from '../../lib/style/typography'
import { Builder } from '../../lib/types/db'
import { User } from '../../lib/types/user'

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

type Props = {
    user: User
    builder: Builder | null
}

const General: React.FC<Props> = ({ user, builder }) => {
    const AuthUser = useAuthUser()
    const router = useRouter()
    const { name } = user
    const submit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            const { name, about, zip, phone } = event.target
            if (!AuthUser.id) return
            await updateUser(AuthUser.id, { name: name.value, isBuilder: true })
            await createBuilder(AuthUser.id, {
                description: about.value,
                phone: phone.value,
                zip: zip.value,
            })
            router.push('/builder/builds')
        },
        [AuthUser.id, router]
    )
    return (
        <Page user={AuthUser} withPadding>
            <Form onSubmit={submit}>
                <Headline1>Name</Headline1>
                <Input
                    type="text"
                    defaultValue={name}
                    placeholder="Dein Name"
                    name="name"
                />
                <Headline1>Über dich</Headline1>
                <TextArea
                    defaultValue={builder?.description}
                    placeholder="Beschreibe deine Manufaktur ein bisschen..."
                    rows={5}
                    name="about"
                />
                <Headline1>Wo baust du aus?</Headline1>
                <Input
                    placeholder="PLZ"
                    type="text"
                    defaultValue={builder?.zip}
                    inputMode="numeric"
                    maxLength={5}
                    minLength={5}
                    name="zip"
                    pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                />
                <Headline1>Telefon</Headline1>
                <Input
                    placeholder="Telefonnummer"
                    defaultValue={builder?.phone}
                    type="text"
                    name="phone"
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

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    if (AuthUser.id) {
        const user = await db.getUser(AuthUser.id)
        const builder = await db.getBuilder(AuthUser.id)
        if (user) {
            return {
                props: { user, builder: builder || null },
            }
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
    }
})

export default withAuthUser<Props>()(General)
