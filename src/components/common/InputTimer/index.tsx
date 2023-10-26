import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { palette } from '@/styles/palette'

type TimerProps = {
  duration: number // 초 단위의 지속 시간
  fontSize?: string
}

const Timer = ({ duration, fontSize = '1rem' }: TimerProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft: number) => prevTimeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <StyledTimer fontSize={fontSize} duration={0}>
      {formatTime(timeLeft)}
    </StyledTimer>
  )
}

const StyledTimer = styled.span<TimerProps>`
  font-size: ${(props) => props.fontSize};
  color: ${palette.RED};
`

export default Timer
