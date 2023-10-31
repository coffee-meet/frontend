import { palette } from '@/styles/palette'

import { NormalButtonStyle } from '../NormalButton/NormalButtonStyles'

export type IconButtonType =
  | 'interest'
  | 'interest-dark'
  | 'particular-topic'
  | 'particular-topic-dark'
  | 'random-matching'
  | 'random-matching-dark'
  | 'random-matching-join'
  | 'random-matching-join-dark'

export const iconButtonStyles: Record<IconButtonType, NormalButtonStyle> = {
  interest: {
    width: '339px',
    height: 70,
    fontColor: palette.WHITE,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(96deg, #7382F8 49.74%, #A6BCFC 93.87%);`,
  },
  'interest-dark': {
    width: '339px',
    height: 70,
    fontColor: palette.DARK_WHITE,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(89deg, ${palette.DARK_SECONDARY} 49.41%, ${palette.DARK_TERTIARY} 92.91%)`,
  },
  'particular-topic': {
    width: '100%',
    height: 70,
    fontColor: palette.GRAY600,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: palette.WHITE,
  },
  'particular-topic-dark': {
    width: '100%',
    height: 70,
    fontColor: palette.DARK_WHITE,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: palette.GRAY700,
  },
  'random-matching': {
    width: '230px',
    height: 70,
    fontColor: palette.WHITE,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(96deg, ${palette.SECONDARY} 49.74%, #A6BCFC 93.87%);`,
    activeBackgroundColor: `linear-gradient(89deg, ${palette.DARK_SECONDARY} 49.41%, ${palette.DARK_TERTIARY} 92.91%)`,
  },
  'random-matching-dark': {
    width: '230px',
    height: 70,
    fontColor: palette.DARK_WHITE,
    font: 'Body_18',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(86deg, #494F80 8.54%, #5A77B3 94.19%);`,
  },
  'random-matching-join': {
    width: '230px',
    height: 50,
    fontColor: palette.WHITE,
    font: 'Body_16',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 10,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(96deg, #7382F8 49.74%, #A6BCFC 93.87%);`,
  },
  'random-matching-join-dark': {
    width: '230px',
    height: 50,
    fontColor: palette.WHITE,
    font: 'Body_16',
    fontWeight: 500,
    letterSpacing: -2,
    borderRadius: 10,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    backgroundColor: `linear-gradient(86deg, #494F80 8.54%, #5A77B3 94.19%);`,
  },
}
