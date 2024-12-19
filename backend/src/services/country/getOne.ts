import { fetchFromExternalAPI, postToExternalAPI } from "../../utils/api";
import { Country, Flag, Population } from "../../types/contries.types";

export default async function getOneCountry(code: string) {
  const countryURL = `https://date.nager.at/api/v3/CountryInfo/${code}`;
  const populationURL = `https://countriesnow.space/api/v0.1/countries/population`;
  const flagURL = `https://countriesnow.space/api/v0.1/countries/flag/images`;

  const [country, flag] = await Promise.all([
    fetchFromExternalAPI<Country>(countryURL),
    postToExternalAPI<{ data: Flag }>(flagURL, { iso2: code }),
  ]);

  const population = await fetchFromExternalAPI<{
    data: Population[];
  }>(populationURL);

  return {
    name: country.data.commonName,
    flagURL: flag.data.data.flag,
    borders: country.data.borders.map((border) => ({
      name: border.commonName,
      countryCode: border.countryCode,
    })),
    population: population.data.data.find(
      (p) => p.country === country.data.commonName
    )?.populationCounts,
  };
}
