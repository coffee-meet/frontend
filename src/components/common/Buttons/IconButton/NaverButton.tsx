import NaverIcon from '@/assets/icons/NaverIcon'
import { OAuthButtonProps, StyledIconWrapper } from '@/components/common/Buttons/IconButton'
import { StyledButtonWrapper } from '@/components/common/Buttons/IconButton/KakaoButton'
import { Text } from '@/components/common/Text'
import { palette } from '@/styles/palette'
const NaverButton = ({ moveToOAuthProvider }: OAuthButtonProps) => {
  return (
    <StyledButtonWrapper buttonTheme={'naver'} onClick={moveToOAuthProvider}>
      <StyledIconWrapper>
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
    </StyledButtonWrapper>
  )
}

export default NaverButton
