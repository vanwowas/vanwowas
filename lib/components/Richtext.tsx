import styled from 'styled-components'
import { typoStyle } from '../style/typography'

const Container = styled.div`
    h1 {
        ${typoStyle.h1}
    }
    h2 {
        ${typoStyle.h2}
    }
    p {
        ${typoStyle.bodym}
    }
`

type Props = {
    text: string
    className?: string
}

const Richtext: React.FC<Props> = ({ text, className }) => (
    <Container
        dangerouslySetInnerHTML={{ __html: text }}
        className={className}
    />
)

export default Richtext
