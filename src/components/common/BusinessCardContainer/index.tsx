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
      const uploadedFile = event.target.files?.[0]
      const uploadedFileReader = new FileReader()

      uploadedFileReader.onloadend = () => {
        setUploadedImage(uploadedFileReader.result as string)
      }

      if (uploadedFile) {
        uploadedFileReader.readAsDataURL(uploadedFile)
      }
    }
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
  }

  return (
    <BusinessCardContainerWrapper>
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
          <UploadLabel>
            <HiddenInput type={'file'} onChange={handleImageUpload} />
            <CameraIconWrapper>
              <CameraIcon src={camera} alt={'Upload Placeholder'} />
            </CameraIconWrapper>
          </UploadLabel>
        )}
      </ImageContainer>
    </BusinessCardContainerWrapper>
  )
}

const BusinessCardContainerWrapper = styled.div`
  position: relative;
  width: 300px;
`

const CameraIconWrapper = styled.div`
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
const UploadLabel = styled.label`
  cursor: pointer;
`
const HiddenInput = styled.input`
  display: none;
`

export default BusinessCardContainer
