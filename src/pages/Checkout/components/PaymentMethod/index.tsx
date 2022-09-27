/* eslint-disable no-unused-vars */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { PaymenthMethodTypes } from '../..'
import { ValidationErrorMessage } from '../../../../components/ValidationErrorMessage'

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
          <PaymentMethodRadioButton>
            <input
              type="radio"
              {...register('paymentMethod')}
              value={PaymenthMethodTypes.CARTAO_DE_CREDITO}
            />
            <div>
              <CreditCard size={16} />
              {PaymenthMethodTypes.CARTAO_DE_CREDITO}
            </div>
          </PaymentMethodRadioButton>

          <PaymentMethodRadioButton>
            <input
              type="radio"
              {...register('paymentMethod')}
              value={PaymenthMethodTypes.CARTAO_DE_DEBITO}
            />
            <div>
              <Bank size={16} />
              {PaymenthMethodTypes.CARTAO_DE_DEBITO}
            </div>
          </PaymentMethodRadioButton>

          <PaymentMethodRadioButton>
            <input
              type="radio"
              {...register('paymentMethod')}
              value={PaymenthMethodTypes.DINHEIRO}
            />
            <div>
              <Money size={16} />
              {PaymenthMethodTypes.DINHEIRO}
            </div>
          </PaymentMethodRadioButton>
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
