import styled from '@emotion/styled'

type AlertTextProps = {
  fontSize: string
  fontColor: string
  children?: React.ReactNode
  padding?: string
  textAlign?: string
}

const AlertText = ({ padding, textAlign, fontSize, fontColor, children }: AlertTextProps) => {
  return (
    <>
      <StyleAlertText
        padding={padding}
        textAlign={textAlign}
        fontSize={fontSize}
        fontColor={fontColor}
      >
        {children}
      </StyleAlertText>
    </>
  )
}

const StyleAlertText = styled.div<AlertTextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
`

export default AlertText
