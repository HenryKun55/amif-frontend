/**
 *
 * File Field
 *
 */

import { useAutoAnimate } from '@formkit/auto-animate/react'
import {
  ChangeEventHandler,
  DragEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import { MdDelete, MdUploadFile } from 'react-icons/md'

import * as S from './styles'

export type Image = {
  id: string
  url: string
  file?: File
}

export type FileFieldProps = {
  initialState?: Image[]
  onChange?: (images: Image[]) => void
}

export const FileField = ({ initialState = [], onChange }: FileFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const [images, setImages] = useState<Image[]>(initialState)
  const [highlight, setHighlight] = useState(false)
  const [hoverImage, setHoverImage] = useState('')

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return
    const newImages = [...fileList].map(file => {
      const url = URL.createObjectURL(file)
      return { id: file.name + file.size, url, file }
    })
    setImages(_images => {
      const imageList = [..._images]
      newImages.forEach(newImage => {
        if (!_images.some(i => i.id === newImage.id)) {
          imageList.push(newImage)
        }
      })
      return imageList
    })
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.files = null
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    addFiles(event.target.files)
  }

  const handleDrop: DragEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    addFiles(event.dataTransfer.files)
    setHighlight(false)
  }

  const handleDragOver: DragEventHandler<HTMLButtonElement> = event => {
    event.preventDefault()
    setHighlight(true)
  }

  const handleDragLeave = () => {
    setHighlight(false)
  }

  const handleRemoveImage = (image: Image) => {
    setImages(_images => _images.filter(i => i.id !== image.id))
  }

  const handleOpenFileUpload = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    onChange?.(images)
  }, [images])

  return (
    <S.Container ref={parent}>
      {images.map(image => (
        <S.ImageWrapper
          key={image.id}
          onMouseOver={() => setHoverImage(image.url)}
          onMouseLeave={() => setHoverImage('')}
        >
          <S.Image src={image.url} />
          {image.url === hoverImage && (
            <S.RemoveButton
              type="button"
              onClick={() => handleRemoveImage(image)}
            >
              <MdDelete size={40} />
            </S.RemoveButton>
          )}
        </S.ImageWrapper>
      ))}
      <S.Input ref={inputRef} type="file" multiple onChange={handleChange} />
      <S.Button
        highlight={highlight}
        type="button"
        onClick={handleOpenFileUpload}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <MdUploadFile size={30} />
        <S.Text>Adicionar Imagens</S.Text>
      </S.Button>
    </S.Container>
  )
}
