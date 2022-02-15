import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'
import React from 'react'
import styled from 'styled-components'
import Page from '../../lib/components/Page'
import Richtext from '../../lib/components/Richtext'
import db from '../../lib/db'
import Image from 'next/image'
import { LinkButton } from '../../lib/components/Button'
import Heart from '../../lib/style/icons/heart.svg'
import colors, { hexToRgb } from '../../lib/style/colors'
import ImageGrid from '../../lib/components/ImageGrid'
import { Build, Builder } from '../../lib/types/db'
import { addFavorite } from '../../lib/db/utils'
import { fontSize } from '../../lib/style/typography'
import Contacts from '../../lib/components/Contacts'
import { useRouter } from 'next/dist/client/router'

const HeaderImage = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;
    margin-bottom: 4rem;
    :after {
        content: '';
        position: absolute;
        top: -1rem;
        right: 1rem;
        left: -1rem;
        bottom: 1rem;
        background-color: transparent;
        border: 2px solid white;
    }
`

const Title = styled.h1`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 10rem;
    padding: 2rem;
    z-index: 1;
    background-color: ${`rgba(${hexToRgb(colors.tertiary)},0.5)`};
    color: ${colors.white};
`

const RoundButton = styled(LinkButton)`
    position: absolute;
    bottom: 3rem;
    right: 4rem;
    z-index: 1;
    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`

const StyledImageGrid = styled(ImageGrid)`
    margin: 4rem auto;
`

const Price = styled.h1`
    span {
        color: ${colors.primary};
    }
`

const ManufactureDetailLink = styled(LinkButton)`
    font-size: ${fontSize.headline2};
    margin: 4rem 0;
    display: inline-flex;
    padding: 2rem;
`

type Props = {
    build: Build
    builder: Builder
    isFavorite: boolean
}

const BuildDetailPage: React.FC<Props> = ({ build, builder, isFavorite }) => {
    const AuthUser = useAuthUser()
    const { title, description, images, price } = build
    const router = useRouter()
    return (
        <Page user={AuthUser} withPadding>
            {images?.length && (
                <HeaderImage>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={images[0].url}
                        alt="Builder Profile"
                    />
                    <Title>{title}</Title>
                    <RoundButton
                        round
                        backgroundColor={isFavorite ? 'primary' : 'secondary'}
                        color="light"
                        borderColor="light"
                        onClick={async () => {
                            if (AuthUser.id) {
                                await addFavorite(AuthUser.id, build.id)
                                router.replace(router.asPath)
                            } else {
                                router.push('/login')
                            }
                        }}
                    >
                        <Heart />
                    </RoundButton>
                </HeaderImage>
            )}
            <Richtext text={description} />
            {images && <StyledImageGrid images={images} />}
            <Price>
                Das Konzept kostet etwa - <span>{price} €</span>
            </Price>
            <ManufactureDetailLink
                backgroundColor="primary"
                borderColor="dark"
                color="light"
                href={`/builder/${build.userId}`}
            >
                Mehr von {builder.name}
            </ManufactureDetailLink>
            <Contacts builder={builder} loggedIn={!!AuthUser.id} />
        </Page>
    )
}
export const getServerSideProps = withAuthUserTokenSSR()(
    async ({ query, AuthUser }) => {
        const { id } = query
        if (typeof id === 'string') {
            const build = await db.getBuild(id)
            let isFavorite = false
            if (AuthUser.id) {
                const user = await db.getUser(AuthUser.id)
                if (user?.favorites?.includes(id)) {
                    isFavorite = true
                }
            }

            if (build) {
                const builder = await db.getBuilder(build?.userId)
                if (builder) {
                    return {
                        props: { build, builder, isFavorite },
                    }
                }
            }
        }
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
)
export default withAuthUser<Props>()(BuildDetailPage)
