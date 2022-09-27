import { ValidationErrorMessageContainer } from './styles'

interface ValidationErrorMessageProps {
  children: string
}

export function ValidationErrorMessage({
  children,
}: ValidationErrorMessageProps) {
  return (
    <ValidationErrorMessageContainer>
      {children}
    </ValidationErrorMessageContainer>
  )
}
