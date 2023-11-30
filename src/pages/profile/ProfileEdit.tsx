import styled from '@emotion/styled'
import { useQuery } from '@tanstack/react-query'
import { useRef, useState } from 'react'

import getMyProfileData from '@/apis/profile/getMyProfileData.ts'
import postMyProfileImage from '@/apis/profile/postMyProfileImage.ts'
import updateMyProfile from '@/apis/profile/updateMyProfile.ts'
import getNicknameValid from '@/apis/register/getNicknameValid.ts'
import AlertText from '@/components/common/AlertText'
import Avatar from '@/components/common/Avatar'
import BackChevron from '@/components/common/BackChevron'
import NormalButton from '@/components/common/Buttons/NormalButton'
import { FlexBox } from '@/components/common/Flexbox'
import GradationBackground from '@/components/common/GradationBackground'
import PageContainer from '@/components/common/PageContainer'
import PageHeader from '@/components/common/PageHeader'
import RegisterInput from '@/components/common/RegisterInput'
import SelectorButtonContainer from '@/components/common/SelectorButtonContainer'
import Spacing from '@/components/common/Spacing'
import useToast from '@/hooks/useToast.tsx'
import { InterestList } from '@/pages/register/RegisterUser.tsx'
import useInterestStore from '@/store/InterestStore.tsx'
import useThemeStore from '@/store/ThemeStore.tsx'
import { palette } from '@/styles/palette.ts'
import { typo } from '@/styles/typo.ts'

const ProfileEdit = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const { interestList } = useInterestStore()
  const inputRef = useRef<HTMLInputElement>(null)
  let nickname = ''
  const [doubleChecked, setDoubleChecked] = useState<null | boolean>(false)
  const [nicknameDuplicated, setNicknameDuplicated] = useState<null | boolean>(null)
  const [imgSrc, setImgSrc] = useState('')
  const { showToast } = useToast()

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['myProfileData'],
    queryFn: getMyProfileData,
  })

  if (isLoading) {
    return <div>{'로딩중...'}</div>
  }
  if (error) {
    return <div>{'에러가 발생했습니다.'}</div>
  }

  const handleNicknameValidCheck = (nickname: string) => {
    getNicknameValid(nickname)
      .then(() => {
        setDoubleChecked(true)
        setNicknameDuplicated(false)
      })
      .catch(() => {
        setDoubleChecked(true)
        setNicknameDuplicated(true)
      })
  }

  const doubleCheckNickName = async () => {
    if (inputRef.current !== null && inputRef.current.value.length == 0) {
      setDoubleChecked(null)
      return
    }
    if (inputRef.current !== null) {
      nickname = inputRef.current.value
      handleNicknameValidCheck(nickname)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    const file = e.target.files?.[0]
    reader.onloadend = () => {
      setImgSrc(reader.result as string)
    }
    if (file) {
      reader.readAsDataURL(file)
      const formData = new FormData()
      formData.append('profileImage', file)
      postMyProfileImage(formData)
        .then(() => {
          showToast({
            message: '프로필 이미지가 수정되었습니다.',
            type: 'success',
            isDarkMode,
          })
          refetch()
        })
        .catch(() => {
          showToast({
            message: '프로필 이미지 수정에 실패했습니다.',
            type: 'error',
            isDarkMode,
          })
        })
    }
  }

  const handleUpdateProfile = () => {
    if (doubleChecked === false || nicknameDuplicated === null) {
      showToast({
        message: '닉네임 중복검사를 해주세요!',
        type: 'warning',
        isDarkMode,
      })
      return
    }
    if (inputRef.current !== null) {
      const updateData = {
        nickname: inputRef.current.value,
        interests: interestList,
      }
      updateMyProfile(updateData)
        .then(() => {
          showToast({
            message: '프로필이 수정되었습니다.',
            type: 'success',
            isDarkMode,
          })
        })
        .catch(() => {
          showToast({
            message: '프로필 수정에 실패했습니다.',
            type: 'error',
            isDarkMode,
          })
        })
    }
  }

  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <Spacing size={50} />
      <PageContainer height={'80%'} isDarkMode={isDarkMode}>
        <FlexBox direction={'column'}>
          <StyledPageHeader
            title={'프로필 수정'}
            leftIcon={<BackChevron hasBackground={true} isDarkMode={isDarkMode} />}
            isDarkMode={isDarkMode}
            hasBackground={true}
          />
          <Spacing size={70} />
          <Avatar width={80} height={80} imgUrl={data?.profileImageUrl ?? imgSrc} />
          <Spacing size={20} />
          <label htmlFor={'profile-image-upload'}>
            <ChangeProfileImageLink>{'프로필 사진 변경'}</ChangeProfileImageLink>
          </label>
          <ProfileImageInput
            type={'file'}
            id={'profile-image-upload'}
            accept={'image/jpeg, image/jpg, image/png'}
            onChange={handleImageUpload}
          />
          <Spacing size={30} />
          <FlexBox gap={10}>
            <RegisterInput width={260} placeholder={'닉네임'} ref={inputRef} />
            <NormalButton normalButtonType={'nickname-duplicate'} onClick={doubleCheckNickName}>
              {'중복확인'}
            </NormalButton>
          </FlexBox>
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
            type={'interest'}
            buttonNames={InterestList}
            maxLength={3}
          ></SelectorButtonContainer>
          <Spacing size={30} />
          <NormalButton normalButtonType={'form-submit'} onClick={handleUpdateProfile}>
            {'프로필 수정'}
          </NormalButton>
        </FlexBox>
      </PageContainer>
    </GradationBackground>
  )
}

const StyledPageHeader = styled(PageHeader)`
  padding: 0 18px;
`
const StyleInterestText = styled.div`
  padding: 10px;
  margin-left: 25px;
  font-size: ${typo.Body_18()};
`

const ChangeProfileImageLink = styled.div`
  font-size: ${typo.Body_12()};
  justify-content: center;
  cursor: pointer;
  color: ${palette.PRIMARY};
  font-weight: 600;
`

const ProfileImageInput = styled.input`
  display: none;
`

export default ProfileEdit
