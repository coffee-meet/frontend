import styled from '@emotion/styled'

import LoginImage from '@/assets/LoginImage.svg'

const HeroImage = ({ ...props }) => {
  return (
    <StyledHeroImageContainer {...props}>
      <StyleHeroImage src={LoginImage} />
    </StyledHeroImageContainer>
  )
}

const StyledHeroImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyleHeroImage = styled.img`
  border-radius: 20px;
  width: 350px;
  height: 350px;

  @media (max-width: 375px) {
    width: 250px;
    height: 250px;
  }
`

export default HeroImage
