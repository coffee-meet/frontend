import { useNavigate } from 'react-router-dom'

const ProfileDefault = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button
        onClick={() => {
          navigate('/profile/edit')
        }}
      >
        {'프로필 수정으로 이동'}
      </button>
    </div>
  )
}

export default ProfileDefault
