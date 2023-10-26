import styled from '@emotion/styled'

import LoginImage from '../assets/LoginImage.svg'

const HeroImage = () => {
  return (
    <>
      <StyleHeroImage src={LoginImage} />
    </>
  )
}

const StyleHeroImage = styled.img`
  border-radius: 20px;
  width: 306px;
  height: 306px;
`

export default HeroImage
