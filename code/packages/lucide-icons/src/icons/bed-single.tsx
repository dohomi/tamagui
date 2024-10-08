import React from 'react'
import PropTypes from 'prop-types'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" stroke={color} />
      <Path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" stroke={color} />
      <Path d="M3 18h18" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'BedSingle'

export const BedSingle = React.memo<IconProps>(themed(Icon))
