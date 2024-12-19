export type Countries = Array<{
  countryCode: string;
  name: string;
}>;

export type Country = {
  name: string;
  flagURL: string;
  borders: Countries;
  population: {
    year: number;
    value: number;
  }[];
};
