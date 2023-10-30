import styled from '@emotion/styled'

import Avatar from '@/components/common/Avatar'

const StyleAvatarGroup = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
`

const StyleAvatarWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

type AvatarGroupProps = {
  avatarList: string[]
}

const AvatarGroup = ({ avatarList }: AvatarGroupProps) => {
  return (
    <StyleAvatarGroup>
      {avatarList.map((avatar, index) => {
        return (
          <StyleAvatarWrapper
            key={index}
            style={{
              right: `${index * 15}px`,
            }}
          >
            <Avatar width={34} height={34} imgUrl={avatar} margin={'0'} border={'2px solid red'} />
          </StyleAvatarWrapper>
        )
      })}
    </StyleAvatarGroup>
  )
}

export default AvatarGroup
