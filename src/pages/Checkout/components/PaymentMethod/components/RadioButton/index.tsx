import { useFormContext } from 'react-hook-form'

import { PaymenthMethodTypes } from '../../../..'

import { RadioButtonContainer } from './styles'

interface RadioButtonProps {
  value: PaymenthMethodTypes
  // eslint-disable-next-line no-undef
  icon: JSX.Element
}

export function RadioButton({ value, icon }: RadioButtonProps) {
  const { register } = useFormContext()

  return (
    <RadioButtonContainer>
      <input type="radio" {...register('paymentMethod')} value={value} />
      <div>
        <>
          {icon}
          {value}
        </>
      </div>
    </RadioButtonContainer>
  )
}
