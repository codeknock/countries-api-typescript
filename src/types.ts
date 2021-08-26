export type Country = {
    name: string
    flag: string
    population: number
    borders: string[]
    languages: Languages[]

    region: string
    countries: Country[]
  }

  export type Languages = {name: string, nativeName: string}