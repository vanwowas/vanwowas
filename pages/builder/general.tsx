import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { useRouter } from 'next/dist/client/router'
import React, { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import Button from '../../lib/components/Button'
import Editor from '../../lib/components/Editor'
import Input from '../../lib/components/Input'
import LoadingContainer from '../../lib/components/LoadingContainer'
import Page from '../../lib/components/Page'
import TextArea from '../../lib/components/TextArea'
import UploadBuilderHeaderImage from '../../lib/components/UploadBuilderHeaderImage'
import db from '../../lib/db'
import { createBuilder, updateUser } from '../../lib/db/utils'
import colors from '../../lib/style/colors'
import { stack } from '../../lib/style/mixins'
import { Headline1 } from '../../lib/style/typography'
import { Builder, User } from '../../lib/types/db'
import Image from 'next/image'
interface HTMLFormEvent extends FormEvent<HTMLFormElement> {
    target: EventTarget & {
        name: {
            value: string
        }
        zip: {
            value: string
        }
        phone: {
            value: string
        }
        website: {
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

const StyledEditor = styled(Editor)`
    background-color: ${colors.white};
`

const StyledUploadBuilderHeaderImage = styled(UploadBuilderHeaderImage)`
    margin-top: 4rem;
    margin-bottom: 3rem;
`

type Props = {
    user: User
    builder: Builder | null
}

const General: React.FC<Props> = ({ user, builder }) => {
    const { name } = user
    const AuthUser = useAuthUser()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [about, setAbout] = useState(builder?.description || '')

    const submit = useCallback(
        async (event: HTMLFormEvent) => {
            event.preventDefault()
            setLoading(true)
            const { name, zip, phone, website } = event.target
            if (!AuthUser.id || !AuthUser.email) return
            try {
                await updateUser(AuthUser.id, {
                    name: name.value,
                    isBuilder: true,
                })

                await createBuilder(AuthUser.id, {
                    description: about,
                    phone: phone.value,
                    zip: zip.value,
                    name: name.value,
                    email: AuthUser.email,
                    website: website.value,
                })
                await router.push('/builder/builds')
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        },
        [AuthUser.email, AuthUser.id, about, router]
    )

    return (
        <Page user={AuthUser} withPadding>
            <LoadingContainer loading={loading}>
                <Form onSubmit={submit}>
                    <Headline1>Manufaktur Name</Headline1>
                    <Input
                        type="text"
                        defaultValue={name}
                        placeholder="Dein Name"
                        name="name"
                    />
                    {builder?.headerImage && (
                        <div
                            style={{ position: 'relative', marginTop: '2rem' }}
                        >
                            <Image
                                src={builder.headerImage}
                                width="250"
                                height="150"
                                layout="fixed"
                                alt="Manufaktur Bild"
                                objectFit="cover"
                            />
                        </div>
                    )}
                    <StyledUploadBuilderHeaderImage>
                        Manufaktur Foto
                    </StyledUploadBuilderHeaderImage>
                    <Headline1>Über die Manufaktur</Headline1>
                    <StyledEditor onChange={setAbout} value={about} />
                    <Headline1>Wo wird ausgebaut?</Headline1>
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
                    <Headline1>Webseite</Headline1>
                    <Input
                        placeholder="Webseite"
                        defaultValue={builder?.website}
                        type="text"
                        name="website"
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
            </LoadingContainer>
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

export default withAuthUser<Props>({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(General)
