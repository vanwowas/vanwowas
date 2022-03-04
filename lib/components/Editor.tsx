import React from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { fadeIn } from '../style/mixins'
import colors from '../style/colors'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const Placeholder = styled.div`
    height: 40vh;
    border-radius: 0.5rem;
    background-color: ${colors.buttonBackground.disabled};
`

const StyledQuill = styled(ReactQuill)`
    border-radius: 0.5rem;
    height: 100%;
    ${fadeIn(400)}
    color: ${colors.dark};
    .ql-toolbar {
        border: 2px solid black;
        border-radius: 0.5rem 0.5rem 0 0;
        height: 44px;
    }
    .ql-container {
        border: 2px solid black;
        border-radius: 0 0 0.5rem 0.5rem;
        height: calc(100% - 44px);
    }
`
type Props = {
    onChange: (content: string) => void
    value: string
    className?: string
}

const Editor: React.FC<Props> = ({ onChange, value, className }) => {
    return (
        <Placeholder>
            <StyledQuill
                value={value}
                onChange={onChange}
                className={className}
                modules={{
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                    ],
                }}
            />
        </Placeholder>
    )
}

export default Editor
