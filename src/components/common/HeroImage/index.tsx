import styled from '@emotion/styled'

import LoginImage from '@/assets/LoginImage.svg'

const HeroImage = () => {
  return (
    <ImageContainer>
      <StyleHeroImage src={LoginImage} />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyleHeroImage = styled.img`
  border-radius: 20px;
  width: 306px;
  height: 306px;
`

export default HeroImage
