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
import Button, { LinkButton } from '../../lib/components/Button'
import Heart from '../../lib/style/icons/heart.svg'
import colors, { hexToRgb } from '../../lib/style/colors'
import ImageGrid from '../../lib/components/ImageGrid'
import { Build, Builder } from '../../lib/types/db'
import { addFavorite } from '../../lib/db/utils'
import {
    fontSize,
    Headline1,
    Headline2,
    Headline3,
} from '../../lib/style/typography'
import Contacts from '../../lib/components/Contacts'
import { useRouter } from 'next/dist/client/router'
import { upToBreakpoint } from '../../lib/style/breakpoints'

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
        border-radius: 0.5rem;
    }
    * > * {
        border-radius: 0.5rem;
    }
`

const Title = styled(Headline1)`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    right: 10rem;
    padding: 2rem;
    z-index: 1;
    background-color: ${`rgba(${hexToRgb(colors.tertiary)},0.5)`};
    border-radius: 0.5rem;
    ${upToBreakpoint('medium')} {
        right: 3rem;
    }
`

const SaveAsFavorite = styled(Button)`
    margin-left: auto;
    margin-top: -3rem;
    margin-bottom: 2rem;
    z-index: 1;
    svg {
        width: 100%;
    }
`

const StyledImageGrid = styled(ImageGrid)`
    margin: 4rem auto;
`

const Price = styled(Headline2)`
    span {
        color: ${colors.primary};
    }
`

const ManufactureDetailLink = styled(LinkButton)`
    font-size: ${fontSize.headline3};
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
    const { title, description, images, price, model } = build
    const router = useRouter()
    return (
        <Page
            user={AuthUser}
            withPadding
            title={`VanWoWas - ${build.title}`}
            description={`VanWoWas - ${build.title} ${builder.name} ${builder.description} ${builder.zip} ${builder.website} Camper Manufaktur finden. Ausbauen von Vans in Deutschland.`}
        >
            {images?.length && (
                <HeaderImage>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={images[0].url}
                        alt="Builder Profile"
                    />
                    <Title color="white">{title}</Title>
                </HeaderImage>
            )}
            <Headline3 color="grey">{model}</Headline3>
            <SaveAsFavorite
                round
                backgroundColor={isFavorite ? 'primary' : 'secondary'}
                color="light"
                borderColor="light"
                onClick={async () => {
                    if (!isFavorite) {
                        if (AuthUser.id) {
                            await addFavorite(AuthUser.id, build.id)
                            router.replace(router.asPath)
                        } else {
                            router.push('/login')
                        }
                    }
                }}
            >
                <Heart />
            </SaveAsFavorite>
            <Richtext text={description} />
            {images && <StyledImageGrid images={images} />}
            <Price color="dark">
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
