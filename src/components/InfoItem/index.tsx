import { ReactNode } from 'react'

import { InfoItemContainer } from './styles'

interface InfoItemProps {
  children: ReactNode
}

export function InfoItem({ children }: InfoItemProps) {
  return <InfoItemContainer>{children}</InfoItemContainer>
}
