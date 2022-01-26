import React, { useCallback, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { FileDrop } from 'react-file-drop'
import { Image } from '../types/db'
import { AddButton } from './AddButton'
import NextImage from 'next/image'
import TextArea from './TextArea'

const Container = styled.div<{ empty: boolean; isDragActive: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    min-height: 40vh;
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
const ImageContainer = styled.div`
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
`
const ImageOverlay = styled.div`
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    background-color: ${colors.buttonBackground.primary};
    opacity: 0.75;
    padding: 1rem;
    align-items: flex-end;
    border-radius: 8px;
    * {
        max-width: 100%;
        min-width: 100%;
        flex: 1 0 auto;
    }
`

export type ImageFile = Image & {
    file?: File
}

type Props = {
    defaultImages: Image[] | null
    onChange: (images: ImageFile[]) => void
}

const ImageDrop: React.FC<Props> = ({ defaultImages, onChange }) => {
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
            onChange(files)
            setImages([...(images ?? []), ...files])
            setIsDragActive(false)
        },
        [images, onChange]
    )

    const onTargetClick = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    const empty = !images

    return (
        <FileDrop
            onDragOver={() => handleFrameDrag(true)}
            onDragLeave={() => handleFrameDrag(false)}
            onDrop={handleDrop}
        >
            <Container empty={empty} isDragActive={isDragActive}>
                {images?.map((img, index) => (
                    <ImageContainer key={img.url}>
                        <NextImage
                            unoptimized={img.url.includes('blob')}
                            src={img.url}
                            layout="fill"
                            objectFit="cover"
                        />
                        <ImageOverlay onClick={(ev) => ev.stopPropagation()}>
                            <TextArea
                                defaultValue={img.description ?? undefined}
                                onChange={(e) => {
                                    const data = images
                                    data[index].description = e.target.value
                                    setImages(data)
                                    onChange && onChange(data)
                                }}
                            />
                        </ImageOverlay>
                    </ImageContainer>
                ))}
                <AddButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="light"
                    onClick={onTargetClick}
                />
                <input
                    onChange={handleDrop}
                    ref={fileInputRef}
                    type="file"
                    multiple
                />
            </Container>
        </FileDrop>
    )
}
export default ImageDrop
