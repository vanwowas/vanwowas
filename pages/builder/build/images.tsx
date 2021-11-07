import {
    AuthAction,
    getFirebaseAdmin,
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

import React, { useCallback, useState } from 'react'
import Button from '../../../lib/components/Button'
import Page from '../../../lib/components/Page'

import { Headline1 } from '../../../lib/style/typography'
import styled from 'styled-components'
import { stack } from '../../../lib/style/mixins'
import { useRouter } from 'next/dist/client/router'
import ImageDrop, { ImageFile } from '../../../lib/components/ImageDrop'
import { Build, Image } from '../../../lib/types/db'
import firebase from 'firebase'

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
    console.log(build)
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
                    description: image.description,
                })
            }
        }
        console.log(snapshots)
        await firebase
            .firestore()
            .collection('builds')
            .doc(build.id)
            .set({ images: 'snapshots' })
        router.push('/builder/builds')
    }, [build.id, images, router])

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
})(async ({ query }) => {
    if (query.id && typeof query.id === 'string') {
        const db = getFirebaseAdmin().firestore()
        const querySnapshot = await db.collection('builds').doc(query.id).get()

        return {
            props: { build: querySnapshot.data() },
        }
    }
    return {
        redirect: {
            permanent: false,
            destination: '/builder/builds',
        },
    }
})

export default withAuthUser<Props>()(AddImages)
