import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { axiosAPI } from '@/apis/axios'
import AppHeader from '@/components/common/AppHeader'
import { ParticularTopicButton } from '@/components/common/Buttons/IconButton'
import GradationBackground from '@/components/common/GradationBackground'
import NavigationBar from '@/components/common/NavigationBar'
import PageContainer from '@/components/common/PageContainer'
import { Text } from '@/components/common/Text'
import Card from '@/components/home/Card'
import useToast from '@/hooks/useToast'
import useAuthStore from '@/store/AuthStore.tsx'
import useThemeStore from '@/store/ThemeStore'
import { palette } from '@/styles/palette'

const Home = () => {
  const [nickname, setNickname] = useState('')
  const [profileImageUrl, setProfileImageUrl] = useState('')
  const isDarkMode = useThemeStore((state) => state.isDarkMode)
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode)
  const { authTokens } = useAuthStore()
  const [isMatching, setIsMatching] = useState(false)
  const navigate = useNavigate()

  const { showToast } = useToast()
  const handleMatchingStart = async () => {
    setIsMatching((prev) => !prev)
    await axiosAPI.post('/v1/matching/start').then((response) => {
      console.log(response)
    })
  }

  useEffect(() => {
    if (!authTokens) {
      showToast({
        message: '로그인이 필요한 서비스입니다.',
        type: 'warning',
        isDarkMode,
      })
      // navigate('/login')
    }
    if (authTokens) {
      setNickname(localStorage.getItem('nickname') || '')
      setProfileImageUrl(localStorage.getItem('profileImageUrl') || '')
    }
  }, [])
  useEffect(() => {
    // setInterval(() => {
    const request = indexedDB.open('matching-database')
    request.onsuccess = (event) => {
      const db = event.target && (event.target as IDBRequest).result
      const transaction = db.transaction('my-store')
      const objectStore = transaction.objectStore('my-store')
      const data = objectStore.get('isMatchingSuccess')
      data.onsuccess = (event: { target: { result: unknown } }) => {
        console.log(`${event.target.result}`)
        if (event.target.result == true) {
          alert('매칭완료!')
          updateIsMatchingSuccessToFalse()
          navigate('/chatting', { state: {} })
        }
      }
    }
    // }, 3000)
  }, [])
  function updateIsMatchingSuccessToFalse() {
    const request = indexedDB.open('my-database', 1)

    request.onsuccess = function (event) {
      const db = event.target && (event.target as IDBRequest).result

      // 트랜잭션 시작
      const tx = db.transaction('my-store', 'readwrite')
      const store = tx.objectStore('my-store')

      // 'isMatchingSuccess' 값을 false로 업데이트
      const getRequest = store.get('isMatchingSuccess')

      getRequest.onsuccess = function (event: { target: IDBRequest<unknown> }) {
        const data = event.target && (event.target as IDBRequest).result

        // 데이터가 존재하면 업데이트 수행
        if (data !== undefined) {
          data.isMatchingSuccess = false
          store.put(false, 'isMatchingSuccess')
        }
        console.log(data.isMatchingSuccess)
        // 트랜잭션 완료
        tx.oncomplete = function () {
          db.close()
        }
      }

      getRequest.onerror = function () {
        console.error('Error reading from IndexedDB:')
        db.close()
      }
    }

    request.onerror = function (event) {
      console.error('Error opening IndexedDB')
    }
  }

  function saveDataToIndexedDB(key: string, value: string) {
    const request = indexedDB.open('my-database', 1)

    request.onupgradeneeded = function (event) {
      const db = event.target && (event.target as IDBRequest).result
      db.createObjectStore('my-store')
    }

    request.onsuccess = function (event) {
      const db = event.target && (event.target as IDBRequest).result
      const tx = db.transaction('my-store', 'readwrite')
      const store = tx.objectStore('my-store')
      store.put(value, key)

      tx.oncomplete = function () {
        db.close()
      }
    }

    request.onerror = function () {
      console.error('Error opening IndexedDB')
    }
  }
  return (
    <GradationBackground isDarkMode={isDarkMode}>
      <AppHeader
        nickname={nickname}
        profileImageUrl={profileImageUrl}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PageContainer
        height={'80%'}
        isDarkMode={isDarkMode}
        style={{
          padding: '5% 5%',
        }}
      >
        <Text
          font={'Body_16'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: '33px 0 22px 0',
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
          }}
        >
          {'진행중인 매칭'}
        </Text>
        <Card isMatching={isMatching} onClick={handleMatchingStart} isDarkMode={isDarkMode} />
        <Text
          font={'Body_16'}
          fontWeight={600}
          letterSpacing={-0.5}
          style={{
            margin: '32px 0 13px 0',
            color: isDarkMode ? `${palette.DARK_WHITE}` : `${palette.DARK_BLUE}`,
          }}
        >
          {'커피밋의 추천기능'}
        </Text>
        <ParticularTopicButton
          isDarkMode={isDarkMode}
          moveToParticularTopic={() => {
            showToast({
              message: '아직 준비중인 기능입니다!',
              type: 'info',
              isDarkMode,
            })
          }}
        />
      </PageContainer>
      <NavigationBar isDarkMode={isDarkMode} />
    </GradationBackground>
  )
}

export default Home
