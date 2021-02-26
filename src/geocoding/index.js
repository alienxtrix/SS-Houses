import axios from "axios";

const { keyMap } = "AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw";
const client = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/",
  params: { key: keyMap },
});

export const getLocations = async (address) => {
  const data = await client.get("json", { params: { address } });
  return data.data.results;
};
