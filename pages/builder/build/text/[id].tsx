import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

import React, { FormEvent, useCallback, useState } from 'react'
import Button from '../../../../lib/components/Button'
import Page from '../../../../lib/components/Page'

import { Headline1, Headline2 } from '../../../../lib/style/typography'
import styled from 'styled-components'
import { stack } from '../../../../lib/style/mixins'
import Input from '../../../../lib/components/Input'
import Editor from '../../../../lib/components/Editor'
import { useRouter } from 'next/dist/client/router'
import colors from '../../../../lib/style/colors'
import { Build, Builder } from '../../../../lib/types/db'
import db from '../../../../lib/db'

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
    id?: string
    builder: Builder
}

const BuildText: React.FC<Props> = ({ build, builder }) => {
    const AuthUser = useAuthUser()
    const [editor, setEditor] = useState(build?.description || '')
    const router = useRouter()
    console.log(router.query.id)
    const onSubmit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            if (!AuthUser.id) return
            // const { title, price } = event.target
            // const data: Build = {
            //     title: title.value,
            //     description: editor,
            //     price: price.value,
            //     zip: builder.zip,
            //     userId: AuthUser.id,
            // }

            // if (router.query && typeof router.query.id === 'string') {
            //     await updateBuild(router.query.id, data)
            // }
            //         if(build && id){
            //             await updateBuild(id, build))
            //         }
            //         // const id = build

            //         //     : await createBuild(data)
            //         router.push(`/builder/add-build/images?id=${id}`)
        },
        [AuthUser.id]
    )
    console.log(build)
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
    console.log(params)
    if (AuthUser.id) {
        // const builder = await db.getBuilder(AuthUser.id)
        // if (builder) {
        //     if (params && typeof params.id === 'string') {
        //         const build = await db.getBuild(params.id)
        //         return {
        //             props: {
        //                 builder,
        //                 build: build ? build : null,
        //             },
        //         }
        //     }
        // }
    }
    return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
    }
})

export default withAuthUser<Props>()(BuildText)
