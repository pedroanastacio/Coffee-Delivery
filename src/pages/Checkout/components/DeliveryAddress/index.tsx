import { useCallback, useEffect } from 'react'
import { MapPinLine } from 'phosphor-react'
import { useFormContext, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { ValidationErrorMessage } from '../../../../components/ValidationErrorMessage'
import { replaceNonDigits } from '../../../../utils/replaceNonDigits'

import {
  Col,
  DeliveryAddressContainer,
  Row,
  Grid,
  Header,
  OptionalInput,
} from './styles'

export function DeliveryAddress() {
  const {
    register,
    control,
    watch,
    setValue,
    setFocus,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useFormContext()

  const cep = replaceNonDigits(watch('cep'))
  const cepIsComplete = cep.length === 8

  const findAddress = useCallback(async () => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const address = await response.json()

    if ('erro' in address) {
      reset()
      setError('cep', { type: 'custom', message: 'CEP não encontrado' })
    } else {
      clearErrors('cep')

      setValue('street', address.logradouro)
      setValue('complement', address.complemento)
      setValue('neighborhood', address.bairro)
      setValue('city', address.localidade)
      setValue('uf', address.uf)

      setFocus('number')
    }
  }, [cep, reset, setValue, setFocus, setError, clearErrors])

  useEffect(() => {
    if (cepIsComplete) {
      findAddress()
    }
  }, [cepIsComplete, findAddress])

  return (
    <DeliveryAddressContainer>
      <Header>
        <MapPinLine size={22} />

        <div>
          <h6>Endereço de entrega</h6>

          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </Header>

      <Grid>
        <Row>
          <Col size={0.356}>
            <Controller
              control={control}
              name="cep"
              render={({ field }) => (
                <InputMask {...field} mask="99999-999" placeholder="CEP" />
              )}
            />
            {errors.cep && (
              <ValidationErrorMessage>
                {errors.cep.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
        </Row>

        <Row>
          <Col size={1}>
            <input
              type="text"
              id="street"
              placeholder="Rua"
              {...register('street')}
            />
            {errors.street && (
              <ValidationErrorMessage>
                {errors.street.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
        </Row>

        <Row>
          <Col size={1}>
            <input
              type="text"
              id="number"
              placeholder="Número"
              {...register('number')}
            />
            {errors.number && (
              <ValidationErrorMessage>
                {errors.number.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
          <Col size={1.74}>
            <OptionalInput>
              <input
                id="complement"
                placeholder="Complemento"
                className="inputComplement"
                {...register('complement')}
              />
              {errors.complement && (
                <ValidationErrorMessage>
                  {errors.complement.message as string}
                </ValidationErrorMessage>
              )}
            </OptionalInput>
          </Col>
        </Row>

        <Row>
          <Col size={3.33}>
            <input
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood && (
              <ValidationErrorMessage>
                {errors.neighborhood.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
          <Col size={4.6}>
            <input
              type="text"
              id="city"
              placeholder="Cidade"
              {...register('city')}
            />
            {errors.city && (
              <ValidationErrorMessage>
                {errors.city.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
          <Col size={1}>
            <input type="text" id="uf" placeholder="UF" {...register('uf')} />
            {errors.uf && (
              <ValidationErrorMessage>
                {errors.uf.message as string}
              </ValidationErrorMessage>
            )}
          </Col>
        </Row>
      </Grid>
    </DeliveryAddressContainer>
  )
}
