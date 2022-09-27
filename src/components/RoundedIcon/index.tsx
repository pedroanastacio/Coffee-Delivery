import { ReactNode } from 'react'

import { RoundedIconContainer, variant } from './styles'

interface RoundedIconProps {
  icon: ReactNode
  variant: variant
}

export function RoundedIcon({ icon, variant }: RoundedIconProps) {
  return <RoundedIconContainer variant={variant}>{icon}</RoundedIconContainer>
}
