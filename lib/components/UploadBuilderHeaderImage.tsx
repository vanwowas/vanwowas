import firebase from 'firebase'
import { useAuthUser } from 'next-firebase-auth'
import { ChangeEvent, useCallback, useState } from 'react'
import styled from 'styled-components'
import { updateBuilder } from '../db/utils'
import { buttonStyle } from './Button'
import LoadingContainer from './LoadingContainer'

const UploadInput = styled.input`
    display: none;
`

const UploadButton = styled.label`
    ${buttonStyle}
`

type Props = {
    className?: string
}

const UploadBuilderHeaderImage: React.FC<Props> = ({ children, className }) => {
    const AuthUser = useAuthUser()
    const [loading, setLoading] = useState(false)
    const uploadNewImage = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && AuthUser.id) {
                setLoading(true)
                const file = event.target.files[0]
                const storage = firebase.storage()
                const storageRef = storage.ref()
                const imageRef = storageRef.child(file.name)
                await imageRef.put(file)
                const url = (await imageRef.getDownloadURL()) as string
                await updateBuilder(AuthUser.id, { headerImage: url })
                setLoading(false)
            }
        },
        [AuthUser.id]
    )
    return (
        <div className={className}>
            <LoadingContainer loading={loading}>
                <UploadInput
                    type="file"
                    id="BtnBrowseHidden"
                    name="profileImage"
                    onChange={uploadNewImage}
                />
                <UploadButton
                    htmlFor="BtnBrowseHidden"
                    id="LblBrowse"
                    backgroundColor="secondary"
                    color="light"
                    borderColor="dark"
                >
                    {children}
                </UploadButton>
            </LoadingContainer>
        </div>
    )
}

export default UploadBuilderHeaderImage
