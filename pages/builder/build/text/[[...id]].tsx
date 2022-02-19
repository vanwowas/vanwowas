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
import LoadingContainer from '../../../../lib/components/LoadingContainer'
import Page from '../../../../lib/components/Page'
import db from '../../../../lib/db'
import { updateBuild } from '../../../../lib/db/utils'
import colors from '../../../../lib/style/colors'
import { stack } from '../../../../lib/style/mixins'
import { Headline1, Headline2 } from '../../../../lib/style/typography'
import { Build, Builder } from '../../../../lib/types/db'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const geofire = require('geofire-common')

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
    builder: Builder
}

const BuildText: React.FC<Props> = ({ build, builder }) => {
    const AuthUser = useAuthUser()
    const [editor, setEditor] = useState(build?.description || '')
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const onSubmit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            setLoading(true)
            if (!AuthUser.id) return
            const { title, price } = event.target
            const place = await fetch(`/api/geohash?zip=${builder.zip}`).then(
                (e) => e.json()
            )

            try {
                const geohash = geofire.geohashForLocation([
                    place.lat,
                    place.lon,
                ])
                const id = await updateBuild({
                    title: title.value,
                    description: editor,
                    price: Number(price.value),
                    userId: AuthUser.id,
                    id: build?.id,
                    geohash,
                    lat: place.lat,
                    lon: place.lon,
                })
                await router.push(`/builder/build/images/${id}`)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        },
        [AuthUser.id, build?.id, builder.zip, editor, router]
    )
    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>
                Erstelle hier ein Ausbau-Konzepte für dein Profil
            </Headline1>
            <LoadingContainer loading={loading}>
                <Form onSubmit={onSubmit}>
                    <div>
                        <Headline2>
                            Wie willst du deinen Ausbau nennen?
                        </Headline2>
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
            </LoadingContainer>
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

        const builder = await db.getBuilder(AuthUser.id)
        return {
            props: {
                build: build && build.userId === AuthUser.id ? build : null,
                builder,
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

export default withAuthUser<Props>({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(BuildText)
