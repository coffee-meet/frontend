import styled from '@emotion/styled'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import AdminLoginAPI from '@/apis/adminLogin/AdminLoginApi'
import Spacing from '@/components/common/Spacing'
import { Text } from '@/components/common/Text'
import useToast from '@/hooks/useToast'
import { palette } from '@/styles/palette'

const AdminLogin = () => {
  const { showToast } = useToast()
  // form 제출 -> API 요청 -> 결과값에 따라 페이지 이동
  const { register, handleSubmit } = useForm()
  const [adminData, setAdminData] = useState('')

  const navigate = useNavigate()

  const mutation = useMutation(AdminLoginAPI.POST_ADMIN_LOGIN, {
    onSuccess: () => {
      navigate('/admin')
    },
    onError: () => {
      showToast({
        message: '올바른 id, password를 입력해주세요.',
        type: 'warning',
        isDarkMode: false,
      })
    },
  })

  const onSubmitAdminLoginData = (AdminLoginData: string) => {
    mutation.mutate(JSON.parse(AdminLoginData))
  }

  return (
    <AdminLoginOuterWrapper>
      <form
        onSubmit={handleSubmit((data) => {
          setAdminData(JSON.stringify(data))
          onSubmitAdminLoginData(adminData)
        })}
      >
        <Spacing size={229}></Spacing>

        <StyledTextWrapper>
          <Text font={'Body_32'} fontWeight={900} letterSpacing={-1}>
            {'Admin Login'}
          </Text>
        </StyledTextWrapper>

        <Spacing size={42}></Spacing>

        <StyledInputWrapper>
          <StyledInput placeholder={'관리자 아이디'} {...register('id')}></StyledInput>
        </StyledInputWrapper>

        <Spacing size={19}></Spacing>

        <StyledInputWrapper>
          <StyledInput
            type={'password'}
            placeholder={'관리자 비밀번호'}
            {...register('password')}
          ></StyledInput>
        </StyledInputWrapper>

        <Spacing size={81}></Spacing>

        <StyledBtnWrapper>
          <StyledButton type={'submit'}>{'로그인'}</StyledButton>
        </StyledBtnWrapper>

        <Spacing size={500}></Spacing>
      </form>
    </AdminLoginOuterWrapper>
  )
}
const AdminLoginOuterWrapper = styled.div`
  background-color: ${palette.GRAY100};
`
const StyledTextWrapper = styled.div`
  text-align: center;
`
const StyledInputWrapper = styled.div`
  text-align: center;
`
const StyledInput = styled.input`
  width: 230px;
  height: 39px;
  border: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 0 0 10px;
  border-color: ${palette.GRAY200};
  box-shadow: 4px 4px 1px 0px ${palette.GRAY200};
  color: ${palette.GRAY400};
  ::placeholder {
    color: ${palette.GRAY300};
  }
`
const StyledBtnWrapper = styled.div`
  text-align: center;
`
const StyledButton = styled.button`
  width: 265px;
  height: 44px;
  border: 1px solid #000;
  border-radius: 11px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 0 0 10px;
  background-color: ${palette.SECONDARY};
  border-color: ${palette.GRAY300};
  color: ${palette.WHITE};
  font-weight: 900;
`

export default AdminLogin
