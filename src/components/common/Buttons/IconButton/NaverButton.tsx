import NaverIcon from '@/assets/icons/NaverIcon'
import { OAuthButtonProps, StyledIconWrapper } from '@/components/common/Buttons/IconButton'
import { ButtonWrapper } from '@/components/common/Buttons/IconButton/KakaoButton'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'
const NaverButton = ({ moveToOAuthProvider }: OAuthButtonProps) => {
  return (
    <ButtonWrapper buttonTheme={'naver'} onClick={moveToOAuthProvider}>
      <StyledIconWrapper
        style={{
          margin: '4px 53px 4px 20px',
        }}
      >
        <NaverIcon width={53} height={53} iconWidth={20} iconHeight={20} borderRadius={10} />
      </StyledIconWrapper>
      <Text
        font={'Body_18'}
        fontWeight={600}
        letterSpacing={-1}
        style={{
          flex: 1,
          textAlign: 'left',
          color: palette.WHITE,
          marginLeft: 20,
        }}
      >
        {'네이버로 시작'}
      </Text>
    </ButtonWrapper>
  )
}

export default NaverButton
