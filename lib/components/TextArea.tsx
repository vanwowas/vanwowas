import styled from 'styled-components'
import colors from '../style/colors'
import { fontSize } from '../style/typography'

const TextArea = styled.textarea`
    border-radius: 8px;
    padding: 16px;
    border: 2px solid black;
    outline: none;
    appearance: none;
    font-size: ${fontSize.body1};
    font-weight: 700;
    ::-webkit-input-placeholder {
        color: ${colors.textColor.primary};
    }
    ::-moz-placeholder {
        color: ${colors.textColor.primary};
    }
    :-ms-input-placeholder {
        color: ${colors.textColor.primary};
    }
    :-moz-placeholder {
        color: ${colors.textColor.primary};
    }
`

export default TextArea
