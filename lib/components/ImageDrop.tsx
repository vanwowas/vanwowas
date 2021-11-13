import React, { useCallback, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import ImageGrid from './ImageGrid'
import colors from '../style/colors'
import { FileDrop } from 'react-file-drop'
import { arrayChunks } from '../utils/array-chunks'
import { Image } from '../types/db'
import { AddButton } from './AddButton'

const Container = styled.div<{ empty: boolean; isDragActive: boolean }>`
    min-height: 50vh;
    transition: transform 300ms;
    cursor: pointer;
    img {
        color: ${colors.buttonBackground.primary};
    }

    input {
        width: 0;
        height: 0;
        opacity: 0;
        display: block;
    }
    ${(p) =>
        p.empty &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    ${(p) =>
        p.isDragActive &&
        css`
            background-color: ${colors.buttonBackground.tertiary};
            opacity: 0.75;
            border-radius: 0.5rem;
        `}
`

export type ImageFile = Image & {
    file: File
}

type Props = {
    defaultImages: Image[] | null
    onDrop: (images: ImageFile[]) => void
}

const ImageDrop: React.FC<Props> = ({ defaultImages, onDrop }) => {
    const [isDragActive, setIsDragActive] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [images, setImages] = useState<Image[] | null>(defaultImages)

    const handleFrameDrag = useCallback(
        (isDragging: boolean) => {
            if (isDragActive !== isDragging) {
                setIsDragActive(isDragging)
            }
        },
        [isDragActive]
    )

    const handleDrop = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | FileList | null) => {
            const files: ImageFile[] = Array.from(
                event instanceof FileList ? event : event?.target.files || []
            ).map((f) => ({
                file: f,
                description: null,
                url: URL.createObjectURL(f),
            }))
            onDrop(files)
            setImages([
                ...(images ?? []),
                ...files.map((f) => ({
                    url: f.url,
                    description: f.description,
                })),
            ])
            setIsDragActive(false)
        },
        [images, onDrop]
    )

    const onTargetClick = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    const grids = arrayChunks<Image>(images ?? [], 7)
    const empty = !images
    return (
        <FileDrop
            onTargetClick={onTargetClick}
            onDragOver={() => handleFrameDrag(true)}
            onDragLeave={() => handleFrameDrag(false)}
            onDrop={handleDrop}
        >
            <Container empty={empty} isDragActive={isDragActive}>
                <input
                    onChange={handleDrop}
                    ref={fileInputRef}
                    type="file"
                    multiple
                />
                {grids.map((imgs, index) => (
                    <ImageGrid
                        key={index}
                        images={imgs}
                        mobileStyle="fullWidth"
                        editable
                    />
                ))}
                {empty && (
                    <AddButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    />
                )}
            </Container>
        </FileDrop>
    )
}
export default ImageDrop
