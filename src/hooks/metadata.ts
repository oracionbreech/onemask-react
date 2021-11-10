import { useEffect } from "react";
import { getMetadataById } from "../services/metadata";

export const useMetadata = () => {
  const init = async () => {
    try {
      const { data, status } = await getMetadataById();

      console.log(status, data);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    init();
  }, []);
};
