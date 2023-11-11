import { Fragment } from 'react'
import { RiStarFill } from 'react-icons/ri'

import { Divider } from '@/components/common/Divider'
import { Text, TextWrapper } from '@/components/common/Text'
import { palette } from '@/styles/palette'

import { StyledIconButtonWrapper, StyledIconWrapper } from '.'

type InterestButtonProps = {
  nickName: string
  interests: string[]
  isDarkMode: boolean
}

const InterestButton = ({ nickName, interests, isDarkMode }: InterestButtonProps) => {
  const setButtonType = isDarkMode ? 'interest-dark' : 'interest'

  return (
    <StyledIconButtonWrapper
      iconButtonType={setButtonType}
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <StyledIconWrapper
        borderRadius={'12px'}
        backgroundColor={palette.WHITE}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '18px 33px 18px 14px',
        }}
      >
        <RiStarFill
          color={palette.PRIMARY}
          style={{
            width: 23,
            height: 23,
          }}
        />
      </StyledIconWrapper>
      <TextWrapper>
        <Text font={'Body_18'} fontWeight={500} letterSpacing={-2} style={{ marginBottom: 4 }}>
          {`${nickName}의 관심사`}
        </Text>
        <Text
          font={'Body_14'}
          fontWeight={500}
          letterSpacing={-1}
          style={{
            color: palette.WHITE,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {interests.map((interest, index) => (
            <Fragment key={interest}>
              {interest}
              {index !== interests.length - 1 && (
                <Divider width={1} height={12} margin={'0 12px'} isDarkMode={isDarkMode} />
              )}
            </Fragment>
          ))}
        </Text>
      </TextWrapper>
    </StyledIconButtonWrapper>
  )
}

export default InterestButton
