import { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoints, upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { BodyL } from '../style/typography'
import Image from './Image'

const Stage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 75vh;
`

const HeaderImage = styled(Image)`
    ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colors.secondary};
        opacity: 0.19;
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${breakpoints.large}px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    ${upToBreakpoint('medium')} {
        padding: 2rem;
    }
    ${upToBreakpoint('small')} {
        padding: 1rem;
    }
`

const Headline = styled.div`
    top: 50%;
    margin-top: 30vh;
`

const IntroText = styled(BodyL)`
    z-index: 2;
    color: #fff;
    font-weight: 700;
    margin-top: auto;
    margin-bottom: 0rem;
`

type Props = {
    url: string
    headline: ReactNode
}
const PageImageStage: React.FC<Props> = ({ url, headline }) => {
    return (
        <Stage>
            <HeaderImage alt="" objectFit="cover" layout="fill" src={url} />
            <Content>
                <Headline>{headline}</Headline>
                <IntroText>
                    Camper-Manufaktur in deiner Nähe, zu deinem Preis,
                    <br /> nach deinem Geschmack
                </IntroText>
            </Content>
        </Stage>
    )
}

export default PageImageStage
