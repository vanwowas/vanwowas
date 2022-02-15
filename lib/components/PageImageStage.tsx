import { ReactNode } from 'react'
import styled from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
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

const Headline = styled.div`
    top: 40%;
    left: 15%;
    position: absolute;
    z-index: 2;
    ${upToBreakpoint('medium')} {
        left: 1rem;
        top: 30%;
    }
`

const IntroText = styled(BodyL)`
    bottom: 2rem;
    left: 15%;
    position: absolute;
    z-index: 2;
    color: #fff;
    ${upToBreakpoint('medium')} {
        left: 1rem;
    }
    font-weight: 700;
`

type Props = {
    url: string
    headline: ReactNode
}
const PageImageStage: React.FC<Props> = ({ url, headline }) => {
    return (
        <Stage>
            <HeaderImage alt="" objectFit="cover" layout="fill" src={url} />
            <Headline>{headline}</Headline>
            <IntroText>
                Camper-Manufaktur in deiner Nähe, zu deinem Preis,
                <br /> nach deinem Geschmack
            </IntroText>
        </Stage>
    )
}

export default PageImageStage
