/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { DeliveryAdress } from './components/DeliveryAdress'
import { PaymentMethod } from './components/PaymentMethod'
import { SelectedCoffees } from './components/SelectedCoffees'

import { CheckoutContainer, CheckoutCardContainer } from './styles'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import { Navigate, useNavigate } from 'react-router-dom'

export enum PaymenthMethodTypes {
  CARTAO_DE_CREDITO = 'CARTÃO DE CRÉDITO',
  CARTAO_DE_DEBITO = 'CARTÃO DE DÉBITO',
  DINHEIRO = 'DINHEIRO',
}

const newOrderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(1, 'Informe o CEP')
    .regex(/^\d{5}(-\d{3})?$/, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(1, 'Informe a UF').length(2, 'UF deve ter 2 caracteres'),
  paymentMethod: zod.nativeEnum(PaymenthMethodTypes, {
    errorMap: () => {
      return { message: 'Selecione uma forma de pagamento' }
    },
  }),
  orderValue: zod.number().positive(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { orderValueWithCharges, emptyCart, totalItems } =
    useContext(ShoppingCartContext)
  const navigate = useNavigate()

  const shoppingCartIsEmpty = totalItems === 0

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      paymentMethod: undefined,
      orderValue: orderValueWithCharges,
    },
  })

  const { handleSubmit } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    emptyCart()

    navigate('/success', {
      replace: true,
      state: {
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        uf: data.uf,
        paymentMethod: data.paymentMethod,
      },
    })
  }

  if (shoppingCartIsEmpty) {
    return <Navigate to="/" />
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <FormProvider {...newOrderForm}>
          <div>
            <h3>Complete o seu pedido</h3>

            <CheckoutCardContainer>
              <DeliveryAdress />

              <PaymentMethod />
            </CheckoutCardContainer>
          </div>

          <div>
            <h3>Cafés selecionados</h3>

            <SelectedCoffees></SelectedCoffees>
          </div>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
