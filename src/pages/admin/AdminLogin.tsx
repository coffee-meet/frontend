import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import AdminLoginAPI from '@/apis/adminLogin/AdminLoginApi'
import NormalButton from '@/components/common/Buttons/NormalButton'
import Spacing from '@/components/common/Spacing'
import { palette } from '@/styles/palette'

const AdminLogin = () => {
  const navigate = useNavigate()
  // form 제출 -> API 요청 -> 결과값에 따라 페이지 이동
  const mutation = useMutation(AdminLoginAPI.POST_ADMIN_LOGIN, {
    onSuccess: (data) => {
      if (data.adminLoginInfo.adminLoginResult == 'error') {
        navigate('/admin')
      }
    },
  })

  const onSubmitAdminLoginData = (AdminLoginData: string) => {
    mutation.mutate(JSON.parse(AdminLoginData))
  }

  const { register, handleSubmit } = useForm()
  const [adminData, setAdminData] = useState('')
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setAdminData(JSON.stringify(data))
        onSubmitAdminLoginData(adminData)
      })}
    >
      <Spacing size={56}></Spacing>
      <StyledInputWrapper>
        <input
          style={{
            width: '351px',
            height: '46px',
            border: '1px solid #000',
            borderRadius: '10px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            padding: '0 0 0 10px',
            borderColor: palette.GRAY300,
          }}
          {...register('adminId')}
          placeholder={'관리자 아이디'}
        />
      </StyledInputWrapper>
      <Spacing size={43}></Spacing>

      <StyledInputWrapper>
        <input
          style={{
            width: '351px',
            height: '46px',
            border: '1px solid #000',
            borderRadius: '10px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            padding: '0 0 0 10px',
            borderColor: palette.GRAY300,
          }}
          {...register('adminPassword')}
          placeholder={'관리자 비밀번호'}
        />
      </StyledInputWrapper>

      <p>{`전송되는 JSON 형태: ${adminData}`}</p>
      <Spacing size={519}></Spacing>

      <StyledBtnWrapper>
        <NormalButton type={'submit'} normalButtonType={'form-submit'}>
          {'관리자 로그인'}
        </NormalButton>
      </StyledBtnWrapper>
    </form>
  )
}
const StyledInputWrapper = styled.div`
  text-align: center;
`
const StyledBtnWrapper = styled.div`
  text-align: center;
`
export default AdminLogin
