import axios from "axios";

import "../array";

type Parameters = Record<string, string>;

const apiUrl = (path: string, parameters: Parameters) => {
  const parsedParameters = new URLSearchParams(parameters);
  return `https://api.guildwars2.com/v2/${path}?${parsedParameters.toString()}`;
};

export const download = async <T>(
  path: string,
  parameters: Parameters = {}
): Promise<T> => {
  try {
    const response = await axios.get<T>(`test${apiUrl(path, parameters)}`);
    return response.data;
  } catch (error) {
    console.error(`Error downloading data from URL: ${path}`);
    throw error;
  }
};

const downloadPage = async <T>(
  path: string,
  parameters: Parameters = {},
  ids: number[]
): Promise<T[]> => download<T[]>(path, { ...parameters, ids: ids.join(",") });

export const downloadCollection = async <T>(
  path: string,
  parameters: Parameters = {}
): Promise<T[]> => {
  const MAXIMUM_NUMBER_OF_IDS_PER_REQUEST = 200;
  const ids = await download<number[]>(path, parameters);
  const results = [];

  for (const chunk of ids.chunk(MAXIMUM_NUMBER_OF_IDS_PER_REQUEST))
    results.push(...(await downloadPage<T>(path, parameters, chunk)));

  return results;
};
