import styled from '@emotion/styled'
import { useState } from 'react'
import { TiDelete } from 'react-icons/ti'

import camera from '@/assets/images/camera.svg'
import { palette } from '@/styles/palette'

import Spacing from '../Spacing'
import { Text } from '../Text'

type BusinessCardContainerProps = {
  isDarkMode: boolean
}

const BusinessCardContainer = ({ isDarkMode }: BusinessCardContainerProps) => {
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
      <Text
        font={'Body_20'}
        fontWeight={700}
        letterSpacing={-1}
        textColor={isDarkMode ? palette.WHITE : palette.BLACK}
      >
        {'명함사진 업로드'}
      </Text>
      <Spacing size={10} />
      <ImageContainer>
        {uploadedImage ? (
          <>
            <StyledImage src={uploadedImage} alt={'Uploaded'} />
            <TiDelete
              style={{
                position: 'absolute',
                top: -10,
                right: -15,
                width: 24,
                height: 24,
                cursor: 'pointer',
                color: isDarkMode ? palette.GRAY300 : palette.BLACK,
              }}
              onClick={handleRemoveImage}
            />
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
  border-radius: 10px;
`

const CameraIcon = styled.img`
  width: 38px;
  height: 38px;
`

export default BusinessCardContainer