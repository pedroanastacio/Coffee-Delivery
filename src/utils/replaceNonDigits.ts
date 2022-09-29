export function replaceNonDigits(value: string) {
  const onlyDigits = value.replace(/[^\d]/g, '')
  return onlyDigits
}
