import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

import React, { useCallback } from 'react'
import Button from '../../../components/Button'
import Page from '../../../components/Page'

import { Headline1 } from '../../../style/typography'
import styled from 'styled-components'
import { stack } from '../../../style/mixins'
import { useRouter } from 'next/dist/client/router'
import ImageDrop from '../../../components/ImageDrop'

const StyledPage = styled(Page)`
    ${stack('3rem', 'y')}
`

const AddImages: React.FC = () => {
    const AuthUser = useAuthUser()
    const router = useRouter()

    const handleClick = useCallback(() => {
        alert('safe to db')
        router.push('/builder/builds')
    }, [router])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>Füge hier Fotos hinzu</Headline1>
            <ImageDrop />
            <div>
                <Button
                    color="dark"
                    backgroundColor="primary"
                    borderColor="dark"
                    onClick={handleClick}
                >
                    fertig
                </Button>
            </div>
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(AddImages)
