import KakaoIcon from '@/assets/icons/KakaoIcon'
import NaverIcon from '@/assets/icons/NaverIcon'

import {
  InterestButton,
  KakaoButton,
  NaverButton,
  ParticularTopicButton,
  RandomMatchingButton,
} from './IconButton'
import NormalButton from './NormalButton/NormalButton'

const Button = () => {
  return (
    <>
      <div>
        <NormalButton normalButtonType={'form-submit'} onClick={() => alert('hi!')}>
          {'이메일 인증?!'}
        </NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'admin-accept'} onClick={() => alert('인증 수락')}>
          {'인증 수락'}
        </NormalButton>
        <NormalButton normalButtonType={'admin-deny'}>{'무시'}</NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'email-certify'}>{'이메일 인증'}</NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'warning-accept'}>{'예, 나가겠습니다.'}</NormalButton>
        <NormalButton normalButtonType={'warning-deny'}>{'아니오, 돌아가겠습니다.'}</NormalButton>
      </div>

      <div>
        <NormalButton normalButtonType={'modal-accept'}>{'수락'}</NormalButton>
        <NormalButton normalButtonType={'modal-deny'}>{'거절'}</NormalButton>
      </div>

      <div>
        <NormalButton normalButtonType={'nickname-duplicate'}>{'중복확인'}</NormalButton>
        <NormalButton normalButtonType={'nickname-duplicate-dark'}>{'중복확인'}</NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'email-certify'}>{'이메일 인증'}</NormalButton>
        <NormalButton normalButtonType={'email-certify-dark'}>{'이메일 인증'}</NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'matching'}>{'매칭 시작'}</NormalButton>
        <NormalButton normalButtonType={'matching'}>{'매칭 취소'}</NormalButton>
        <NormalButton normalButtonType={'matching-dark'}>{'매칭 재시도'}</NormalButton>
        <NormalButton normalButtonType={'matching'}>{'매칭 완료!!'}</NormalButton>
      </div>
      <div>
        <NormalButton normalButtonType={'matching'}>{'매칭 시작'}</NormalButton>
      </div>
      <div>
        <InterestButton
          nickName={'우땅'}
          interests={['웹 소프트웨어 개발', '취업', '주식']}
          isDarkMode={false}
        />
      </div>

      <div>
        <InterestButton
          nickName={'김철수'}
          interests={['여행', '재태크', '요리']}
          isDarkMode={true}
        />
      </div>
      <div>
        <ParticularTopicButton isDarkMode={true} />
      </div>
      <div>
        <ParticularTopicButton />
      </div>
      <div>
        <RandomMatchingButton date={'2023-10-25T01:01:39.590Z'} />
      </div>
      <div>
        <RandomMatchingButton date={'2023-10-25T01:01:39.590Z'} isDarkMode={true} />
      </div>
      <div>
        <NaverIcon width={53} height={53} iconWidth={20} iconHeight={20} borderRadius={10} />
      </div>
      <div>
        <KakaoIcon width={53} height={53} iconWidth={20} iconHeight={20} borderRadius={10} />
        <KakaoIcon width={20} height={20} iconWidth={10} iconHeight={10} borderRadius={4} />
      </div>
      <div>
        <NaverButton />
      </div>
      <div>
        <KakaoButton />
      </div>
    </>
  )
}

export default Button
