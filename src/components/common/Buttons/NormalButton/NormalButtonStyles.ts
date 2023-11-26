import { palette } from '@/styles/palette'
import { KeyOfTypo } from '@/styles/theme'

export type NormalButtonStyle = {
  width: number | string
  height: number
  fontColor: string
  backgroundColor: string
  font: KeyOfTypo
  fontWeight: number
  letterSpacing: number
  boxShadow?: string
  stroke?: string
  borderRadius: number
  activeBackgroundColor?: string
}

export type NormalButtonType =
  | 'warning-accept'
  | 'warning-deny'
  | 'nickname-duplicate'
  | 'nickname-duplicate-dark'
  | 'email-certify'
  | 'email-certify-dark'
  | 'form-submit'
  | 'admin-accept'
  | 'admin-deny'
  | 'modal-accept'
  | 'modal-deny'
  | 'matching'
  | 'matching-dark'

export const NormalButtonStyles: Record<NormalButtonType, NormalButtonStyle> = {
  'warning-accept': {
    width: 113,
    height: 36,
    fontColor: palette.WHITE,
    backgroundColor: palette.RED,
    font: 'Body_12',
    fontWeight: 600,
    letterSpacing: -1,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 10,
  },
  'warning-deny': {
    width: 113,
    height: 36,
    fontColor: palette.WHITE,
    backgroundColor: palette.GRAY500,
    font: 'Body_12',
    fontWeight: 600,
    letterSpacing: -1,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 10,
  },
  'nickname-duplicate': {
    width: 60,
    height: 46,
    fontColor: palette.BLACK,
    backgroundColor: palette.WHITE,
    font: 'Body_12',
    fontWeight: 400,
    letterSpacing: -0.5,
    stroke: palette.GRAY200,
    borderRadius: 10,
  },
  'nickname-duplicate-dark': {
    width: 60,
    height: 46,
    fontColor: palette.DARK_WHITE,
    backgroundColor: palette.GRAY600,
    font: 'Body_12',
    fontWeight: 400,
    letterSpacing: -0.5,
    stroke: palette.GRAY200,
    borderRadius: 10,
  },
  'email-certify': {
    width: 73,
    height: 46,
    fontColor: palette.BLACK,
    backgroundColor: palette.WHITE,
    font: 'Body_12',
    fontWeight: 400,
    letterSpacing: -0.5,
    stroke: palette.GRAY200,
    borderRadius: 10,
  },
  'email-certify-dark': {
    width: 73,
    height: 46,
    fontColor: palette.WHITE,
    backgroundColor: palette.GRAY700,
    font: 'Body_12',
    fontWeight: 400,
    letterSpacing: -0.5,
    stroke: palette.GRAY600,
    borderRadius: 10,
  },
  'form-submit': {
    width: 335,
    height: 45,
    fontColor: palette.WHITE,
    backgroundColor: palette.PRIMARY,
    font: 'Body_16',
    fontWeight: 600,
    letterSpacing: -1,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 11,
  },
  'admin-accept': {
    width: 110,
    height: 47,
    fontColor: palette.WHITE,
    backgroundColor: palette.PRIMARY,
    font: 'Body_16',
    fontWeight: 600,
    letterSpacing: -2,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 50,
  },
  'admin-deny': {
    width: 110,
    height: 47,
    fontColor: palette.GRAY400,
    backgroundColor: palette.GRAY100,
    font: 'Body_16',
    fontWeight: 600,
    letterSpacing: -2,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 50,
  },
  'modal-accept': {
    width: 85,
    height: 40,
    fontColor: palette.WHITE,
    backgroundColor: palette.PRIMARY,
    font: 'Body_14',
    fontWeight: 600,
    letterSpacing: -2,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 50,
  },
  'modal-deny': {
    width: 85,
    height: 40,
    fontColor: palette.GRAY400,
    backgroundColor: palette.GRAY200,
    font: 'Body_14',
    fontWeight: 600,
    letterSpacing: -2,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 50,
  },
  matching: {
    width: 63,
    height: 30,
    fontColor: palette.GRAY300,
    backgroundColor: palette.GRAY100,
    font: 'Body_12',
    fontWeight: 500,
    letterSpacing: -1,

    borderRadius: 8,
  },
  'matching-dark': {
    width: 123,
    height: 45,
    fontColor: palette.DARK_WHITE,
    backgroundColor: palette.DARK_TERTIARY,
    font: 'Body_14',
    fontWeight: 500,
    letterSpacing: -1,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: 8,
  },
}
