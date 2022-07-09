import { host } from "services/const";

export const fetchExchanges = async (page = 1, perPage = 10) => {
  const response = await fetch(
    `${host}/exchanges?page=${page}&per_page=${perPage}`
  );

  if (!response.ok) {
    throw new Error("Problem fetching data");
  }

  return await response.json();
};
