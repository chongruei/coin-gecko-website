import { query } from "..";

export const fetchExchanges = async (page = 1, perPage = 10) => {
  return await query(`/exchanges?page=${page}&per_page=${perPage}`);
};
