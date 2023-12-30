import React from 'react'
import { icon, colors } from '@styles'
import { IconProps } from './Icon.types'

const Icon: React.FC<Partial<IconProps>> = ({
  name = 'github',
  color = 'black',
  size = 30,
  style,
}) => {
  const [viewBox, ...paths] = icon[name]
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill='none'
      style={{ ...(style as object) }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d: string, index: number) => (
        <path
          key={index}
          fillRule='evenodd'
          clipRule='evenodd'
          d={d}
          fill={colors[color]}
        />
      ))}
    </svg>
  )
}

export { Icon }
