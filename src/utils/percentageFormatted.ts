export function percentageFormatted(percentageDietMeal: string) {
  return percentageDietMeal === 'NaN' || percentageDietMeal === '0'
    ?
    '0.00'
    :
    `${percentageDietMeal}`
}