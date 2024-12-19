import axios from "axios";

export async function fetchFromExternalAPI<T = any>(
  url: string
): Promise<{ data: T; status: number }> {
  try {
    const response = await axios.get(url);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(`Error fetching data from ${url}`, error);
    throw new Error("Failed to fetch data from external API");
  }
}

export async function postToExternalAPI<T = any>(
  url: string,
  body: any
): Promise<{ data: T; status: number }> {
  try {
    const response = await axios.post(url, body);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error(`Error posting data to ${url}`, error);
    throw new Error("Failed to post data to external API");
  }
}
