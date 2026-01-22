export const getCountryFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

export const getCountryName = (countryCode: string): string => {
  const countries: Record<string, string> = {
    US: 'United States',
    GB: 'United Kingdom',
    FI: 'Finland',
    IN: 'India',
    MX: 'Mexico',
    DE: 'Germany',
    PK: 'Pakistan',
    CZ: 'Czech Republic',
    PH: 'Philippines',
    BE: 'Belgium',
    ES: 'Spain',
    IL: 'Israel',
    CA: 'Canada',
    TW: 'Taiwan',
    NL: 'Netherlands',
    FR: 'France',
    AU: 'Australia',
    BR: 'Brazil',
    IT: 'Italy',
  }
  return countries[countryCode] || countryCode
}
