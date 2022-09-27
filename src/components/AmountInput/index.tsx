import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { AmountInputContainer } from './style'

interface AmountInputProps extends InputHTMLAttributes<HTMLInputElement> {
  amount: number
  min: number
  max: number
  step: number
  setAmount: (value: number) => void
  setAmountByStep: (value: number) => void
}

export function AmountInput({
  amount,
  min,
  max,
  step,
  setAmount,
  setAmountByStep,
  ...props
}: AmountInputProps) {
  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setAmount(event.target.valueAsNumber)
  }

  function handleDecrementAmount() {
    setAmountByStep(step * -1)
  }

  function handleIncrementAmount() {
    setAmountByStep(step)
  }

  return (
    <AmountInputContainer>
      <button
        type="button"
        onClick={handleDecrementAmount}
        disabled={amount <= min}
      >
        <Minus size={14} />
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={amount}
        onChange={handleAmountChange}
        {...props}
      />
      <button
        type="button"
        onClick={handleIncrementAmount}
        disabled={amount >= max}
      >
        <Plus size={14} />
      </button>
    </AmountInputContainer>
  )
}
