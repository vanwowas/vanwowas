import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { useRouter } from 'next/dist/client/router'

import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import Button from '../../../../lib/components/Button'
import Editor from '../../../../lib/components/Editor'
import Input from '../../../../lib/components/Input'
import Page from '../../../../lib/components/Page'
import db from '../../../../lib/db'
import { updateBuild } from '../../../../lib/db/utils'
import colors from '../../../../lib/style/colors'
import { stack } from '../../../../lib/style/mixins'
import { Headline1, Headline2 } from '../../../../lib/style/typography'
import { Build } from '../../../../lib/types/db'

interface HTMLFormEvent extends FormEvent<HTMLFormElement> {
    target: EventTarget & {
        title: {
            value: string
        }
        price: {
            value: string
        }
    }
}

const Form = styled.form`
    ${stack('2rem', 'y')}
`

const StyledPage = styled(Page)`
    ${stack('3rem', 'y')}
    ${Headline1} {
        color: ${colors.textColor.secondary};
    }
`
const StyledEditor = styled(Editor)`
    background-color: white;
    display: flex;
    flex-direction: column;
`

type Props = {
    build?: Build
}

const BuildText: React.FC<Props> = ({ build }) => {
    const AuthUser = useAuthUser()
    const [editor, setEditor] = useState(build?.description || '')
    const router = useRouter()
    const onSubmit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            if (!AuthUser.id) return
            const { title, price } = event.target

            const id = await updateBuild({
                title: title.value,
                description: editor,
                price: price.value,
                userId: AuthUser.id,
                id: build?.id,
            })
            router.push(`/builder/build/images/${id}`)
        },
        [AuthUser.id, build?.id, editor, router]
    )
    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>
                Erstelle hier ein Ausbau-Konzepte für dein Profil
            </Headline1>
            <Form onSubmit={onSubmit}>
                <div>
                    <Headline2>Wie willst du deinen Ausbau nennen?</Headline2>
                    <Input
                        placeholder="Titel"
                        type="text"
                        name="title"
                        defaultValue={build?.title}
                    />
                </div>
                <div>
                    <Headline2>
                        Wo geht es preislich bei dem Ausbau los?
                    </Headline2>
                    <Input
                        defaultValue={build?.price}
                        type="number"
                        placeholder="ab Preis €"
                        name="price"
                    />
                </div>
                <div>
                    <Headline2>Beschreibe deinen Ausbau</Headline2>
                    <StyledEditor onChange={setEditor} value={editor} />
                </div>
                <div>
                    <Button
                        type="submit"
                        borderColor="dark"
                        backgroundColor="primary"
                        color="dark"
                    >
                        weiter zu den Bildern
                    </Button>
                </div>
            </Form>
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ params, AuthUser }) => {
    if (AuthUser.id) {
        const build = params?.id
            ? await db.getBuild(params?.id?.toString())
            : null
        return {
            props: {
                build: build && build.userId === AuthUser.id ? build : null,
            },
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
    }
})

export default withAuthUser<Props>()(BuildText)
