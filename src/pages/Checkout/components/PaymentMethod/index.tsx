/* eslint-disable no-unused-vars */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { PaymenthMethodTypes } from '../..'
import { ValidationErrorMessage } from '../../../../components/ValidationErrorMessage'
import { RadioButton } from './components/RadioButton'

import {
  PaymentMethodRadioButton,
  Header,
  PaymentMethodContainer,
  PaymentMethods,
} from './styles'

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <PaymentMethodContainer>
      <Header>
        <CurrencyDollar size={22} />

        <div>
          <h6>Pagamento</h6>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Header>

      <div>
        <PaymentMethods>
          <RadioButton
            value={PaymenthMethodTypes.CARTAO_DE_CREDITO}
            icon={<CreditCard size={16} />}
          />

          <RadioButton
            value={PaymenthMethodTypes.CARTAO_DE_DEBITO}
            icon={<Bank size={16} />}
          />

          <RadioButton
            value={PaymenthMethodTypes.DINHEIRO}
            icon={<Money size={16} />}
          />
        </PaymentMethods>

        {errors.paymentMethod && (
          <ValidationErrorMessage>
            {errors.paymentMethod.message as string}
          </ValidationErrorMessage>
        )}
      </div>
    </PaymentMethodContainer>
  )
}
