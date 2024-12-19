export type Countries = Array<{
  countryCode: string;
  name: string;
}>;

type BaseCountry = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
};

export type Border = BaseCountry & {
  borders: null;
};

export type Country = BaseCountry & {
  borders: Border[];
};

export type Flag = {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
};

export type Population = {
  country: string;
  code: string;
  iso3: string;
  populationCounts: { year: number; value: number }[];
};
