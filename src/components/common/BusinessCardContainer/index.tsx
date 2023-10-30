import styled from '@emotion/styled'
import { useState } from 'react'

import businessCardDeleteBtn from '@/assets/images/businessCardDeleteBtn.png'
import camera from '@/assets/images/camera.svg'
import { palette } from '@/styles/palette'

type BusinessCardContainerProps = {
  textColor: string
}

const BusinessCardContainer = ({ textColor }: BusinessCardContainerProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!uploadedImage) {
      const file = event.target.files?.[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }

      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
  }

  return (
    <Wrapper>
      <Title textColor={textColor}>{'명함사진 업로드'}</Title>
      <ImageContainer>
        {uploadedImage ? (
          <>
            <StyledImage src={uploadedImage} alt={'Uploaded'} />
            <DeleteIcon src={businessCardDeleteBtn} onClick={handleRemoveImage} />
          </>
        ) : (
          <label style={{ cursor: 'pointer' }}>
            <input type={'file'} onChange={handleImageUpload} style={{ display: 'none' }} />
            <Placeholder>
              <CameraIcon src={camera} alt={'Upload Placeholder'} />
            </Placeholder>
          </label>
        )}
      </ImageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 300px;
`

const Title = styled.div<BusinessCardContainerProps>`
  color: ${(props) => props.textColor};
  font-size: 18px;
  margin-bottom: 10px;
`

const Placeholder = styled.div`
  width: 88px;
  height: 88px;
  background-color: ${palette.WHITE};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ImageContainer = styled.div`
  width: 88px;
  position: relative;
`

const StyledImage = styled.img`
  width: 88px;
  height: 88px;
  object-fit: cover;
  position: relative;
`

const DeleteIcon = styled.img`
  position: relative;
  top: -100px;
  right: -75px;
  cursor: pointer;
`

const CameraIcon = styled.img`
  width: 38px;
  height: 38px;
`

export default BusinessCardContainer
