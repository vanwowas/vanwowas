import styled from 'styled-components'
import colors from '../style/colors'
import { typoStyle } from '../style/typography'

const Container = styled.div`
    color: ${colors.dark};
    h1 {
        ${typoStyle.h1}
    }
    h2 {
        ${typoStyle.h2}
    }
    h3 {
        ${typoStyle.h3}
    }
    p {
        ${typoStyle.bodyL}
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
