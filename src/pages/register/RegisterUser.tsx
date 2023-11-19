import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { MdWbSunny } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { axiosAPI } from '@/apis/axios'
import AlertText from '@/components/common/AlertText'
import NormalButton from '@/components/common/Buttons/NormalButton'
import { FlexBox } from '@/components/common/Flexbox'
import RegisterInput from '@/components/common/RegisterInput'
import SelectorButtonContainer from '@/components/common/SelectorButtonContainer'
import Spacing from '@/components/common/Spacing'
import useToast from '@/hooks/useToast'
import useAuthStore from '@/store/AuthStore'
import useInterestStore from '@/store/InterestStore'
import useThemeStore from '@/store/ThemeStore'
import { palette } from '@/styles/palette'
import { typo } from '@/styles/typo'

const RegisterUser = () => {
  const InterestList = [
    '요리',
    '맛집',
    '음악',
    '연애',
    '패션',
    '여행',
    '운동',
    '게임',
    '재테크',
    '자격증',
    '외국어',
    '전자기기',
    '반려동물',
  ]
  const navigate = useNavigate()
  const { authCode } = useLocation().state || {}
  const inputRef = useRef<HTMLInputElement>(null)
  const [doubleChecked, setDoubleChecked] = useState<null | boolean>(false)
  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null)
  let nickname = ''
  const { interestList } = useInterestStore()
  const { provider } = useAuthStore()
  const { showToast } = useToast()
  const isDarkMode = useThemeStore((state) => state.isDarkMode)

  const getNicknameValid = async (nickname: string) => {
    return await axiosAPI.get(`/v1/users/duplicate?nickname=${nickname}`)
  }
  const doubleCheckMutation = useMutation((nickname: string) => getNicknameValid(nickname), {
    onSuccess: (response) => {
      if (response.status == 200) {
        //사용가능한 닉네임일 경우
        setDoubleChecked(true)
        setNicknameDuplicated(false)
      } else {
        //이미 사용 중인 닉네임일 경우
        setDoubleChecked(true)
        setNicknameDuplicated(true)
      }
    },
    onError: () => {},
  })
  const doubleCheckNickName = async () => {
    if (inputRef.current !== null && inputRef.current.value.length == 0) {
      setDoubleChecked(null)
      return
    }
    if (inputRef.current !== null) {
      nickname = inputRef.current.value
      doubleCheckMutation.mutate(nickname)
      // const response = getNicknameValid(nickname)
      // console.log(response)
    }
  }
  const formValidation = () => {
    console.log(doubleChecked)
    if (inputRef.current !== null && inputRef.current.value.length === 0) {
      showToast({
        message: '닉네임을 입력하세요!',
        type: 'warning',
        isDarkMode,
      })
      return false
    } else if (!doubleChecked) {
      showToast({
        message: '중복검사를 해주세요!',
        type: 'warning',
        isDarkMode,
      })
      return false
    } else if (nicknameDuplicated) {
      showToast({
        message: '사용할 수 없는 닉네임입니다.',
        type: 'warning',
        isDarkMode,
      })
      return false
    } else {
      return true
    }
  }
  const submitUserProfileData = () => {
    if (formValidation()) {
      console.log(nickname, interestList)
      if (doubleChecked && inputRef.current !== null && interestList.length > 0) {
        const body = {
          authCode: authCode,
          nickname: inputRef.current.value,
          keywords: interestList,
          oAuthProvider: provider,
        }
        console.log(body)
        registerMutation.mutate(body)
      }
    }
  }
  const registerPost = async (body: object) => {
    return await axiosAPI.post('/v1/users/sign-up', body)
  }

  const registerMutation = useMutation((body: object) => registerPost(body), {
    onSuccess: (response) => {
      localStorage.setItem('jwt', response.data.accessToken)
      showToast({
        message: '닉네임, 관심사 정보 등록을 완료했습니다!',
        type: 'success',
        isDarkMode,
      })

      navigate('/register/company')
    },
    onError: (err) => {
      console.log(err)
    },
  })
  return (
    <StyleRegisterWrapper>
      <StyleRegisterHeader>
        <Spacing size={64} />
        <FlexBox gap={10} fullWidth={true} justify={'space-around'}>
          <span></span>
          <StyleHeaderText>{'프로필 등록'} </StyleHeaderText>
          <StyleIcon>
            <MdWbSunny size={20} color={palette.TERTIARY} />
          </StyleIcon>
        </FlexBox>
        <Spacing size={11} />
        <StyleDivider />
      </StyleRegisterHeader>
      <Spacing size={73} />
      <FlexBox gap={16}>
        <RegisterInput width={260} placeholder={'닉네임'} ref={inputRef} />
        <NormalButton normalButtonType={'nickname-duplicate'} onClick={doubleCheckNickName}>
          {'중복확인'}
        </NormalButton>
      </FlexBox>
      {nicknameDuplicated === null && doubleChecked === null && (
        <AlertText
          padding={'10px'}
          textAlign={'end'}
          fontSize={`11px`}
          fontColor={`${palette.RED}`}
        >
          {'닉네임 중복검사를 해주세요!'}
        </AlertText>
      )}
      {nicknameDuplicated === false && doubleChecked && (
        <AlertText
          padding={'10px'}
          textAlign={'end'}
          fontSize={`11px`}
          fontColor={`${palette.PRIMARY}`}
        >
          {'사용 가능한 닉네임입니다.'}
        </AlertText>
      )}
      {nicknameDuplicated === true && doubleChecked && (
        <AlertText
          padding={'10px'}
          textAlign={'end'}
          fontSize={`11px`}
          fontColor={`${palette.RED}`}
        >
          {'이미 사용 중인 닉네임입니다.'}
        </AlertText>
      )}
      <Spacing size={44} />
      <StyleInterestText>{'관심사'}</StyleInterestText>
      <FlexBox direction={'column'}>
        <SelectorButtonContainer
          isDarkMode={false}
          buttonNames={InterestList}
          maxLength={4}
        ></SelectorButtonContainer>
      </FlexBox>

      <StyleSubmitButtonWrapper>
        <NormalButton normalButtonType={'form-submit'} onClick={submitUserProfileData}>
          {'다음'}
        </NormalButton>
      </StyleSubmitButtonWrapper>
    </StyleRegisterWrapper>
  )
}
const StyleRegisterWrapper = styled.div`
  background-color: ${palette.GRAY100};
  height: 100%;
`
const StyleRegisterHeader = styled.div``
const StyleHeaderText = styled.span`
  font-size: ${typo.Body_24()};
`
const StyleDivider = styled.hr`
  height: 1px;
  background-color: ${palette.GRAY200};
  border: 0;
`
const StyleInterestText = styled.div`
  padding: 10px;
  margin-left: 25px;
  font-size: ${typo.Body_18()};
`
const StyleSubmitButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 22px;
`
const StyleIcon = styled.button`
  cursor: pointer;
`
export default RegisterUser
