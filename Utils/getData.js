import { baseInstanceAPI } from "../axios";

const getData = async (url) => {
  const resp = await baseInstanceAPI.get(url, {
    headers: {
      Authorization: `Bearer ${getLocalStorage("token")}`,
    },
  });
};
