import { axios } from "./exports";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "2dd8e8ea38msh09b29c83b63b77ap18a346jsnd63922c98f28",
    },
  });

  return data;
};
