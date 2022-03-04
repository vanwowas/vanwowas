import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import ImageGrid from '../lib/components/ImageGrid'
import Page from '../lib/components/Page'
import db from '../lib/db'
import { Image } from '../lib/types/db'

const StyledPage = styled(Page)`
    & > * {
        margin: 0;
    }
    & > * + * {
        margin-top: 1rem;
    }
`

type Props = {
    images: Image[]
}
function chunkArrayInGroups(arr: Image[], size: number) {
    const myArray = []
    for (let i = 0; i < arr.length; i += size) {
        myArray.push(arr.slice(i, i + size))
    }
    return myArray
}

const InspirationPage: React.FC<Props> = ({ images }) => {
    const AuthUser = useAuthUser()
    const grids = useMemo(() => chunkArrayInGroups(images, 7), [images])
    console.log(grids)
    return (
        <StyledPage
            user={AuthUser}
            withPadding
            title="VanWoWas - Inspiration"
            description="Camper Manufaktur finden. Ausbauen von Vans in Deutschland. Inspiration finden. Bilder finden."
        >
            {grids.map((g, i) => (
                <ImageGrid images={g} key={i} />
            ))}
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()(async () => {
    const images = await db.getImageSet()
    console.log(images.length)
    return {
        props: { images },
    }
})

export default withAuthUser<Props>()(InspirationPage)
