import { testWithBtn } from '@/apis/test'
import NormalButton from '@/components/common/Buttons/NormalButton'

const ProfileEdit = () => {
  const testClick = async () => {
    try {
      const response = await testWithBtn('길동이')
      console.log(response.data)
      // 로그인 성공 시 필요한 로직을 추가합니다.
    } catch (error) {
      console.error('카카오 로그인에 실패했습니다.', error)
    }
  }
  return (
    <div>
      {'ProfileEdit'}
      <NormalButton onClick={testClick} normalButtonType={'nickname-duplicate'}>
        {'닉네임 중복 테스트'}
      </NormalButton>
    </div>
  )
}

export default ProfileEdit
