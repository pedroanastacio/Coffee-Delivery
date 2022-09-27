import { MapPinLine } from 'phosphor-react'
import { useFormContext, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'

import { ValidationErrorMessage } from '../../../../components/ValidationErrorMessage'

import {
  Col,
  DeliveryAdressContainer,
  Row,
  Grid,
  Header,
  OptionalInput,
} from './styles'

export function DeliveryAdress() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <DeliveryAdressContainer>
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
              render={({ field }) => (
                <InputMask {...field} mask="99999-999" placeholder="CEP" />
              )}
              control={control}
              name="cep"
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
    </DeliveryAdressContainer>
  )
}
