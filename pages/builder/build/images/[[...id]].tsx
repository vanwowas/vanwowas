import firebase from 'firebase'
import {
    AuthAction,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import { useRouter } from 'next/dist/client/router'

import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Button from '../../../../lib/components/Button'
import ImageDrop, { ImageFile } from '../../../../lib/components/ImageDrop'
import Page from '../../../../lib/components/Page'
import db from '../../../../lib/db'
import { updateBuild } from '../../../../lib/db/utils'
import { stack } from '../../../../lib/style/mixins'
import { Headline1 } from '../../../../lib/style/typography'
import { Build, Image } from '../../../../lib/types/db'

const StyledPage = styled(Page)`
    ${stack('3rem', 'y')}
`

type Props = {
    build: Build
}
const AddImages: React.FC<Props> = ({ build }) => {
    const AuthUser = useAuthUser()
    const router = useRouter()
    const [images, setImages] = useState<ImageFile[]>([])
    const submit = useCallback(async () => {
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const snapshots: Image[] = []
        for (const image of images) {
            if (image.file instanceof File) {
                const imageRef = storageRef.child(image.file.name)
                await imageRef.put(image.file)
                const url = await imageRef.getDownloadURL()
                snapshots.push({
                    url,
                    description: image.description || null,
                })
            }
        }
        await updateBuild({
            ...build,
            images: [...(build.images ?? []), ...snapshots],
        })
        router.push('/builder/builds')
    }, [build, images, router])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>Füge hier Fotos hinzu</Headline1>
            <ImageDrop defaultImages={build.images} onDrop={setImages} />
            <div>
                <Button
                    color="dark"
                    backgroundColor="primary"
                    borderColor="dark"
                    onClick={submit}
                >
                    fertig
                </Button>
            </div>
        </StyledPage>
    )
}
export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ params, AuthUser }) => {
    if (AuthUser.id) {
        const build = await db.getBuild(params?.id?.toString())
        if (build?.userId === AuthUser.id) {
            return {
                props: {
                    build,
                },
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

export default withAuthUser<Props>()(AddImages)
