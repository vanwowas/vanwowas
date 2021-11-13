import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import ImageGrid from '../lib/components/ImageGrid'
import Page from '../lib/components/Page'
import db from '../lib/db'
import { Image } from '../lib/types/db'

type Props = {
    images: Image[]
}

const InspirationPage: React.FC<Props> = ({ images }) => {
    const AuthUser = useAuthUser()

    return (
        <Page user={AuthUser} withPadding>
            <ImageGrid images={images} />
        </Page>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()(async () => {
    const images = await db.getImageSet()
    return {
        props: { images },
    }
})

export default withAuthUser<Props>()(InspirationPage)
