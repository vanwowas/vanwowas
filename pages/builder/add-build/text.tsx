import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
} from 'next-firebase-auth'

import React, { useCallback, useState } from 'react'
import Button from '../../../components/Button'
import Page from '../../../components/Page'

import { Headline1, Headline2 } from '../../../style/typography'
import styled from 'styled-components'
import { stack } from '../../../style/mixins'
import Input from '../../../components/Input'
import Editor from '../../../components/Editor'
import { useRouter } from 'next/dist/client/router'
import colors from '../../../style/colors'

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

const AddText: React.FC = () => {
    const AuthUser = useAuthUser()
    const [editor, setEditor] = useState('')
    const router = useRouter()

    const handleClick = useCallback(() => {
        alert('safe to db')
        router.push('/builder/add-build/images')
    }, [router])

    return (
        <StyledPage user={AuthUser} withPadding>
            <Headline1>
                Erstelle hier ein Ausbau-Konzepte für dein Profil
            </Headline1>
            <div>
                <Headline2>Wie willst du deinen Ausbau nennen?</Headline2>
                <Input placeholder="Titel" type="text" />
            </div>
            <div>
                <Headline2>Wo geht es preislich bei dem Ausbau los?</Headline2>
                <Input type="number" placeholder="ab Preis €" />
            </div>
            <div>
                <Headline2>Beschreibe deinen Ausbau</Headline2>
                <StyledEditor onChange={setEditor} value={editor} />
            </div>
            <div>
                <Button
                    borderColor="dark"
                    backgroundColor="primary"
                    color="dark"
                    onClick={handleClick}
                >
                    weiter zu den Bildern
                </Button>
            </div>
        </StyledPage>
    )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(AddText)
