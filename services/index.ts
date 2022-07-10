import { host } from "./const";

export const query = async (url: string) => {
  const response = await fetch(`${host}${url}`);

  if (!response.ok) {
    throw new Error("Problem fetching data");
  }

  return await response.json();
};
