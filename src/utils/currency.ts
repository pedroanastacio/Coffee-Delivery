export function currency(value: number): string {
  const valueInBRL = value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })

  return valueInBRL
}
