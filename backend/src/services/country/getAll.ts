import { fetchFromExternalAPI } from "../../utils/api";
import { Countries } from "../../types/contries.types";

export default async function getAllCountriesService() {
  const URL = "https://date.nager.at/api/v3/AvailableCountries";
  return await fetchFromExternalAPI<Countries[]>(URL);
}
