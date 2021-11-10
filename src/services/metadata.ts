import { AxiosResponse } from "axios";
import api from "./api";

const GET_METADATA_BY_ID = "/metadata";

export const getMetadataById = (): Promise<AxiosResponse> => {
  return api.get(`${GET_METADATA_BY_ID}?index=5000`);
};
