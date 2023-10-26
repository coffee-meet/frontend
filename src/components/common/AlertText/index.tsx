import styled from '@emotion/styled'

type AlertTextProps = {
  fontSize: string
  fontColor: string
  children?: React.ReactNode
}

const AlertText = ({ fontSize, fontColor, children }: AlertTextProps) => {
  return (
    <>
      <StyleAlertText fontSize={fontSize} fontColor={fontColor}>
        {children}
      </StyleAlertText>
    </>
  )
}

const StyleAlertText = styled.div<AlertTextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`

export default AlertText
